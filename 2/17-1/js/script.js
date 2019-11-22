'use strict';
/*jshint esversion: 6 */
/*jshint devel:true */

// let box = document.getElementById('box'),
//     btn = document.getElementsByTagName('button'),
//     circle = document.getElementsByClassName('circle'),
//     heart = document.querySelectorAll('.heart'),
//     oneHeart = document.querySelector('.heart'),
//     wrapper = document.querySelector('.wrapper');

let menuUl = document.querySelector('.menu'),
    menuItems = document.querySelector('.menu-item'),
    list = document.getElementsByTagName('li');
       
    console.log(list[1]);

    let replacedNode = menuUl.replaceChild(list[0], list[1]); // третий был удален и заменен
    menuUl.insertBefore(replacedNode, list[2]);
    
    //***ARBAYTEN***!!! head = document.querySelector('header');
//***ARBAYTEN***!!!document.body.removeChild(head);


