//Прототипне наслідування
//Прототипи – це механізм, за допомогою якого об'єкти JavaScript успадковують властивості
//один від одного.
//ООП у JavaScript побудовано на прототипному наслідуванні. Об'єкти можна організувати у
//цепочки таким чином, щоб здійснювався автоматичний пошук властивості в іншому об'єкті,
//не знайденому в одному об'єкті. Сполучною ланкою виступає спеціальна прихована
//властивість [[Prototype]], яка в консолі браузера відображається як __proto__.

//Object.create(obj)

// const a = {
//   c: 10,
//   hi() {
//     console.log('Hello world!');
//   },
// };

// const b = Object.create(a);
// const b = {
//   __proto__: a,
// };
// b.d = 25;
// b.hi();
// console.log('b :>> ', b);

//hasOwnProperty()
// for (const key in b) {
//   if (b.hasOwnProperty(key)) {
//     console.log('key :>> ', key);
//   }
// }

// function User(name, lastname) {
//   this.name = name;
//   this.lastname = lastname;
// //   this.syHi = function () {
// //     console.log('Hello world!');
// //   };
// }

// User.prototype.syHi = function () {
//   console.log('Hello world!');
// };

// const user = new User('Poly', 'Ivanova');
// console.log('user :>> ', user);

// user.syHi();
//Класи JavaScript були введені в ECMAScript 2015 і являють собою синтаксичний цукор над існуючим в JavaScript механізмом прототипного успадкування.

//Оголошення класу:
// 1 class declaration
// class Rectangle {}

//2 class expression
// const Rectangle = class {};

// Метод constructor — спеціальний метод, необхідний створення та ініціалізації об'єктів, створених, з допомогою класу. У класі може бути лише один метод з ім'ям конструктора.

// class User {
//   constructor(name = 'Mango') {
//     this.name = name;
//   }
// }

// const user = new User();
// console.log('user :>> ', user);
//Методи прототипу

// class User {
//   constructor(name = 'Mango') {
//     this.name = name;
//   }
//   syHi() {
//     console.log(`Hello, ${this.name}`);
//   }
// }

// const user = new User();
// user.syHi();
// console.log('user :>> ', user);

//Статичні методи та властивості
//Ключове слово static визначає статичний метод або властивості для класу.
//Статичні методи та властивості викликаються без інстанцування (en-US) їхнього класу,
//і не можуть бути викликані у екземплярів (instance) класу.
// Object.keys
// Object.values
// Object.create

// class User {
//     static age = 25;
//   constructor(name = 'Mango') {
//     this.name = name;
//   }

//   static syHi() {
//     console.log(`Hello, ${this.name}`);
//   }
// }

// const user = new User();
// User.syHi();

// console.log('User.age; :>> ', User.age);

//Публічні поля

// class User {
//   constructor(name = 'Mango') {
//     this.name = name;
//   }

//   syHi() {
//     console.log(`Hello, ${this.name}`);
//   }
// }

// const user = new User('Poly');
// console.log('user.name :>> ', user.name);

//Приватні поля

// class User {
//   #name;
//   constructor(name = 'Mango') {
//     this.#name = name;
//   }

//   syHi() {
//     console.log(`Hello, ${this.#name}`);
//   }
// }

// const user = new User('Poly');
// // user.syHi();
// console.log('user.#name :>> ', user.#name);

//Спадкування класів за допомогою extends

// class User {
//   constructor(name = 'Mango') {
//     this.name = name;
//   }

//   syHi() {
//     console.log(`Hello, ${this.name}`);
//   }
// }

// class Mango extends User {
//   constructor(name, age = 25) {
//     super(name);
//     this.age = age;
//   }
//   myMethod() {
//     super.syHi();
//     console.log('1111 :>> ', 1111);
//   }
// }

// const mango = new Mango('Poly', 12);
// mango.myMethod();
// console.log('mango :>> ', mango);
// user.syHi();
// console.log('user.#name :>> ', user.#name);

//Геттери і сеттери

// class User {
//   constructor(name = 'Mango') {
//     this._name = name;
//   }
//   get name() {
//     return this._name;
//   }
//   set name(value) {
//     this._name = value;
//     console.log('111111 :>> ', 111111);
//   }
// }

// const user = new User('Poly');
// user.name = 'Mango';
// console.log('user.name :>> ', user.name);

class Counter {
  constructor(step = 0) {
    this.step = step;
  }
  up = () => {
    console.log('this :>> ', this);
    this.step += 1;
  };
  getStep() {
    console.log('this.step :>> ', this.step);
  }
}

const counter = new Counter();

const up = counter.up;
up();
up();
counter.getStep();
// function sum(a = 0, b = 0) {
//   return a + b;
// }

// console.log('sum(10, 5) :>> ', sum(10, 5));

// function myMap(arr = []) {
//   return arr.map(item => item);
// }
// console.log('myMap (arr) :>> ', myMap());
