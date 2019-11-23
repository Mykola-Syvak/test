'use strict';
/*jshint esversion: 6 */
/*jshint devel:true */

let menuUl = document.querySelector('.menu'),
    menuItems = document.querySelector('.menu-item'),
    list = document.getElementsByTagName('li'),
    body = document.getElementsByTagName('body'),
    div = document.getElementsByTagName('div'),
    li = document.createElement('li'),
    title = document.querySelector('.title'),
    column = document.querySelector('.column'),
    promptUser = document.querySelector('#prompt'),
    adv = document.querySelector('.adv');
       
    let replacedNode = menuUl.replaceChild(list[0], list[1]); // третий был удален и заменен
    menuUl.insertBefore(replacedNode, list[2]); // третий был удален и заменен

    li.classList.add('menu-item'); // добавляем класс в наш новый ли
    li.textContent = 'Пятый пункт'; // добавляем текст в наш новый ли
    menuUl.insertBefore(li, list[4]); //добавили 5й пункт - наш новый ли

    document.body.style.background = "url('img/apple_true.jpg')"; //меняем картинку бекграунда
    title.textContent = "Мы продаем только подлинную технику Apple"; //меняем слоган
    div[1].removeChild(adv); //удаляем рекламу

    let question;
    function userQuestion() {
        question = prompt('Как вы относитесь к технике Apple?',''); // спрашиваем у пользователя
        promptUser.textContent = question; // записываем ответ в соответствующее поле
    };

    setTimeout('userQuestion()', 500);


    


