// let timerId = setTimeout(sayHello, 3000);
// clearTimeout(timerId);

// let timerId = setInterval(sayHello, 3000);
// clearTimeout(timerId);

// function sayHello() {
//     console.log('Hello world');
// }

// let timerId = setTimeout(function log() {
//     console.log('Hello');
//     setTimeout(log, 2000);
// });

let btn = document.querySelector('.btn'),
    square = document.querySelector('.square');

function myAnimation() {
    let pos = 0;

    let id = setInterval(frame, 10);
    function frame() {
        if(pos == 240) {
            clearInterval(id);
        } else {
            pos++;
            square.style.top = pos + 'px';
            square.style.left = pos + 'px';
        }
    }
}

btn.addEventListener('click', myAnimation);

let btnBlock = document.querySelector(".btn-clock"),
    btns = document.getElementsByTagName('button');

btnBlock.addEventListener('click', function(event) {
    if (event.target && event.target.matches('button.first')) {
        console.log("Hello!");
    }
});