"use strict";

require("core-js/modules/es6.promise");

require("core-js/modules/es6.object.to-string");

function promise() {
  var drink = 0;

  function shoot(arrow) {
    console.log('Вы сделали выстрел...');
    var promise = new Promise(function (resolve, reject) {
      setTimeout(function () {
        Math.random() > .5 ? resolve({}) : reject("Вы промахнулись");
      }, 3000);
    });
    return promise;
  }

  ;

  function win() {
    console.log('Вы победили');
    drink == 1 ? buyBeer() : giveMoney();
  }

  function buyBeer() {
    console.log('Вам купили пиво');
  }

  function giveMoney() {
    console.log('Вам заплатили!');
  }

  function loose() {
    console.log('Вы проиграли');
  }

  shoot({}).then(function (mark) {
    return console.log('Вы попали в цель');
  }).then(win).catch(loose);
}

module.exports = promise;