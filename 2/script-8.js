'use strict';
/*jshint esversion: 6 */
let money = parseInt(prompt('Ваш бюджет на месяц?', 0));
let time = new Date(prompt('Введите дату в формате YYYY-MM-DD', 'YYYY-MM-DD'));
let asapBuy = prompt('Введите обязательную статью расходов в этом месяце', 'холодильник');
let asapBuySumm = parseInt(prompt('Во сколько обойдется?', 1000));


let appData = {
    budget: parseInt(money),
    timeData: time,
    expenses: {
      asapBuy : asapBuySumm
    },
    optionalExpenses: {},
    income: [],
    savings: false
};


alert((money-appData.expenses.asapBuy)/30);

alert((money-appData.expenses.asapBuy)/30);
