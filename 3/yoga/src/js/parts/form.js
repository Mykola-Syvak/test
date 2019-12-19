function form() {
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
}

module.exports = form;