window.addEventListener('DOMContentLoaded', function() {

    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    let hideTabContent = (a) => {
        for (let i = a; i < tabContent.length; i++) {
                tabContent[i].classList.remove('show');
                tabContent[i].classList.add('hide');
        }
    };
    hideTabContent(1);

    let showTabContent = (b) => {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    };

    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for(let i = 0; i < tab.length; i++) {
                if(target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break ;
                }
            }
        }
    });

    // ///////////// Timer 
    let deadline = '2019-12-30';

    let getTimeRemaining = (endtime) => {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60)));

            return {
                'total' : t,
                'hours' : hours,
                'minutes' : minutes,
                'seconds' : seconds
            };
    };

    let setClock = (id, endtime) => {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);
        
            function updateClock() {
                let t = getTimeRemaining(endtime);
                
                if (t.hours < 10) {
                    hours.textContent = '0' + t.hours;
                } else {
                hours.textContent = t.hours;
                }
                
                if (t.minutes < 10) {
                    minutes.textContent = '0' + t.minutes;
                } else {
                minutes.textContent = t.minutes;
                }
                
                if (t.seconds < 10) {
                    seconds.textContent = '0' + t.seconds;
                } else {
                seconds.textContent = t.seconds;
                }
                if (t.total <= 0) {
                    clearInterval(timeInterval);
                }
            }
    };

    setClock('timer', deadline);

    // Modal under timer

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    more.addEventListener('click', function () {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    // Modal under timer

    let descriptionBtn = document.querySelectorAll('.description-btn');
    
    for (let i = 0; i < descriptionBtn.length; i++) {
        descriptionBtn[i].addEventListener('click', function() {
            overlay.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    };

    // Form

    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с Вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');
        
        statusMessage.classList.add('status');
    
    
    function sendForm(form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            form.appendChild(statusMessage);
            let formData = new FormData(form);

            function postData(data) {

                return new Promise(function(resolve, reject) {
                    let request = new XMLHttpRequest();
                    request.open('POST', 'server.php');
                    //request.setRequestHeader('Content-type', 'application/json; charser=utf-8');
                    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                    // let obj = {};
                    // formData.forEach(function(value, key) {
                    //     obj[key] = value;
                    // });
                    // let json = JSON.stringify(obj); //
                
                    request.onreadystatechange = function () {
                        if (request.readyState < 4) { 
                            resolve()
                        } else if(request.readyState === 4) {
                            if (request.status == 200 && request.status < 3) {
                                resolve()
                            }
                            else {
                            reject()
                            }
                        }
                    }

                    request.send(data);
                    
                });
            };

            function clearInput() {
                for (let i = 0; i < input.length; i++) {
                    input[i].value = '';
                }
            }

            postData(formData)
                .then(() => statusMessage.innerHTML = message.loading)
                .then(() => statusMessage.innerHTML = message.success)
                .catch(() => statusMessage.innerHTML = message.failure)
                .then(clearInput)
        });
    }
    sendForm(form);
    // Contact Form --> server

    let contactForm = document.querySelector('#form'),
        contactInput = contactForm.getElementsByTagName('input');
    
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        contactForm.appendChild(statusMessage);

        let newRequest = new XMLHttpRequest();
        newRequest.open('POST', 'server.php');
        //request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        newRequest.setRequestHeader('Content-type', 'application/json; charser=utf-8');

        console.log(contactForm);

        let newFormData = new FormData(contactForm);

        console.log(newFormData);

        let newObj = {};
        newFormData.forEach(function(value, key) {
            newObj[key] = value;
        });
        let newJson = JSON.stringify(newObj);
        
        newRequest.send(newJson);

        newRequest.addEventListener('readystatechange', function () {
            if (newRequest.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if(newRequest.readyState === 4 && newRequest.status == 200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }
        });

            for (let i = 0; i < contactInput.length; i++) {
                contactInput[i].value = '';
            }
    });

    // Slider

    let slideIndex = 1,
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');

    showSlides(slideIndex);

        function showSlides(n) {
            
            if (n > slides.length) {
                slideIndex = 1;
            }

            if (n < 1) {
                slideIndex = slides.length;
            }

            slides.forEach((item) => item.style.display = 'none');
            // for (let i = 0; i < slides.length; i++) {
            //     slides[i].style.display = 'none';
            // }
            dots.forEach((item) => item.classList.remove('dot-active'));

            slides[slideIndex - 1].style.display = 'block';
            dots[slideIndex - 1].classList.add('dot-active');

        }

        function plusSlides(n) {
            showSlides(slideIndex += n);
        }
        function currentSlide(n) {
            showSlides(slideIndex = n);
        }

        prev.addEventListener('click', function() {
            plusSlides(-1);
        });

        next.addEventListener('click', function() {
            plusSlides(+1);
        });

        dotsWrap.addEventListener('click', function(event) {
            for (let i = 0; i < dots.length + 1; i++) {
                if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
                    currentSlide(i);
                }
            }
        });
});