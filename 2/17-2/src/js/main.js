'use strict';
/*jshint esversion: 6 */
/*jshint devel:true */

let startCalc = document.querySelector('#start'),
    // правый блок элементов
    budgetValue = document.querySelector('.budget-value'),
    daybudgetValue = document.querySelector('.daybudget-value'),
    levelValue = document.querySelector('.level-value'),
    expensesValue = document.querySelector('.expenses-value'),
    optionalexpensesValue = document.querySelector('.optionalexpenses-value'),
    incomeValue = document.querySelector('.income-value'),
    monthsavingsValue = document.querySelector('.monthsavings-value'),
    yearsavingsValue = document.querySelector('.yearsavings-value'),
    // поля(input) c обязательными расходами
    expensesItem = document.querySelectorAll('.expenses-item'),
    buttons = document.getElementsByTagName('button'),
    expensesBtn = buttons[0],
    optexpEnsesBtn = buttons[1],
    dayBudgetBtn = buttons[2],
    fourthButton = buttons[3],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncome = document.querySelector('.choose-income'),
    checkBoxSavings = document.querySelector('#savings'),
    chooseSum = document.querySelector('.choose-sum'),
    choosePercent = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value'),
    dataWrapper = document.querySelectorAll('.data');

let money, time;

startCalc.addEventListener('click', function() {
    time = prompt('Введите дату в формате YYYY-MM-DD', 'YYYY-MM-DD');
    money = +prompt('Ваш бюджет на месяц?', 0);
    appData.startBtnCheck = true;
    btnEnable();
    while(isNaN(money) || money == "" || money == null) {
        money = +prompt('Ваш бюджет на месяц?', 0);
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});

let sumExp = 0;
expensesBtn.addEventListener('click', function expensesBtnFnc() {
    

    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;

        if ((typeof(a)) === 'string' && ((typeof(a)) != null) && ((typeof(b)) != null)
        && a != '' && b != '' && a.length  < 50) {
            console.log("done");
            appData.expenses[a] = +b;
            sumExp += +b;
            //console.log(sumExp);
        } else {
            alert("Вы ввели ошибочные данные");
        }
    }
    expensesValue.textContent = sumExp;
    return sumExp;
});


optexpEnsesBtn.addEventListener('click', function() {
    for (let i = 0; i < optionalExpensesItem.length; i++) {
        let optExp = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = optExp;
        optionalexpensesValue.textContent += appData.optionalExpenses[i] + ' ';  
    }
});



dayBudgetBtn.addEventListener('click', function() {

    if (appData.budget != undefined) {
        appData.moneyPerDay = ((appData.budget) / 30).toFixed();
        daybudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            levelValue.textContent = 'Минимсальный уровень достатка';
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = 'Средний уровень достатка';
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = 'Высокий уровень достатка';
        } else {
            levelValue.textContent = 'Произошла ошибка';
        }
    } else {
        daybudgetValue.textContent = 'Произошла ошибка';
    }
    
});

chooseIncome.addEventListener('input', function() {
    let items = chooseIncome.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
});

checkBoxSavings.addEventListener('click', function() {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

chooseSum.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +chooseSum.value,
            percent = +choosePercent.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

choosePercent.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +chooseSum.value,
            percent = +choosePercent.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
    startBtnCheck: false
};

function btnDisable() {
    for (let i = 0; i < (buttons.length - 1); i++) {
        buttons[i].disabled = true;
    }
};

function btnEnable() {
    for (let i = 0; i < (buttons.length - 1); i++) {
        buttons[i].disabled = false;
    }
};

if (appData.startBtnCheck == false) {
    btnDisable(); 
 };

let newSum;
// for (let i = 0; i < appData.expenses.length; i++) {
//     newSum = appData.expenses[i];
// };


for (var key in appData.expenses) {
    console.log(appData.expenses[key]);
    newSum += appData.expenses[key];
};

console.log(newSum);