'use strict';
/*jshint esversion: 6 */
let money = parseInt(prompt('Ваш бюджет на месяц?', 0));
let time = new Date(prompt('Введите дату в формате YYYY-MM-DD', 'YYYY-MM-DD'));
let asapBuy;
let asapBuySumm;

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

for (let i = 0; i < 2; i++) {
    asapBuy = prompt('Введите обязательную статью расходов в этом месяце', 'холодильник');
    asapBuySumm = parseInt(prompt('Во сколько обойдется?', 1000));
};

alert(appData.budget/30);