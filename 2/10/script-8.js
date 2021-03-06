'use strict';
/*jshint esversion: 6 */
/*jshint devel:true */

let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?', 0);
    time = prompt('Введите дату в формате YYYY-MM-DD', 'YYYY-MM-DD');

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt('Ваш бюджет на месяц?', 0);
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
                b = prompt("Во сколько обойдется?", '');
            if ((typeof(a)) === 'string' && ((typeof(a)) != null) && ((typeof(b)) != null)
            && a != '' && b != '' && a.length  < 50) {
                console.log("done");
                appData.expenses[a] = b;
            } else {
                alert("Вы ввели ошибочные данные");
            }
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log ("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log ("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log ("Высокий уровень достатка");
        } else {
            console.log ("Произошла ошибка");
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " +appData.monthIncome);    
        }
    },
    chooseOptExpenses: function() {
        for (let i = 0; i < 3; i++) {
            let optExp = +prompt("Статья необязательных расходов?");
            appData.optionalExpenses[y] = optExp;
            y++;     
        }
    },
    chooseIncome: function () {
        let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
        appData.income = items.split(', ');
    }
};

appData.chooseExpenses();
appData.detectDayBudget();
appData.detectLevel();
appData.checkSavings();
let y = 1; //возможно, нужно будет перенести эту запись в место до объекта appData
appData.chooseOptExpenses();