// function User (name, age) {
//     this.name = name;
//     let userAge = age;
//     this.getAge = function() {
//         return userAge;
//     }
//     this.setAge = function(age) {
//         if (typeof age == 'number' && age > 0 && age < 110) {
//             userAge = age;
//         } else {
//             console.log('Недопустимое значение');
//         }
//     };
//     this.say = function() {
//         console.log(`Имя пользователя ${this.name}, возраст: ${this.userAge}`);
//     };
// }

// let user = new User('Ivan', 25);
// console.log(user.name);
// console.log(user.userAge);
// user.say();
// console.log(user.getAge());
// user.setAge('30');
// console.log(user.getAge());

// let number = 1;

// (function() {
//     let number = 2;
//     console.log(number);

//     return console.log(number + 3);
// }());

// console.log(number);

let user = (function() {
    let private = function() {
        console.log('I am privat');
    };
    let sayHello = function() {
        console.log('Hello!');
    };
    return {
        sayHello: sayHello
    };

}());

console.log(user);
console.log(user.sayHello());