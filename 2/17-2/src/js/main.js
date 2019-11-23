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
    firstButton = buttons[0],
    secondButton = buttons[1],
    thirdButton = buttons[2],
    fourthButton = buttons[3],
    optionalExpenses = document.querySelectorAll('.optionalexpenses-item'),
    optionalExpenses1 = optionalExpenses[0],
    optionalExpenses2 = optionalExpenses[1],
    optionalExpenses3 = optionalExpenses[2],
    chooseIncome = document.querySelector('.choose-income'),
    checkBoxSavings = document.querySelector('#savings'),
    chooseSum = document.querySelector('.choose-sum'),
    choosePercent = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

console.log(dayValue);