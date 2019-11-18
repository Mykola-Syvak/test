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


if (typeof(asapBuy) === 'string' && asapBuy != '' && asapBuySumm != '') {
    alert(appData.budget/30);
} else {
    alert("Вы ввели недействительное значение");
}