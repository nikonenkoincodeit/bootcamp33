'use strict';
//This
//This - це ключове слово, що використовується в JavaScript, яке має особливе значення,
//що залежить від контексту, в якому воно застосовується. this - це посилання на об'єкт у контексті якого була викликана функція

// const user = {
//   name: 'Poly',
//   syHi() {
//     console.log('Hello, ', this.name);
//   },
// };
// user.syHi();
//Необхідно засвоїти лише одне правило для визначення this - значення контексту всередині
//функції (не стрілочної) визначається не на момент її створення, а на момент виклику.
//Тобто значення this визначається тим, як викликається функція, а не де вона була
//оголошена.

//this у глобальній області видимості

// function foo() {
//   console.log('this :>> ', this);
// }
// foo();
//this в методі об'єкта

//this в callback-функціях

// const obj = {
//   name: 'Mango',
//   syHi() {
//     console.log('Hello, ', this.name);
//   },
// };
// // obj.syHi();
// const foo = function (callback) {
//   console.log('this :>> ', this);
//   callback();
// };

// foo(obj.syHi);

//this у стрілочних функціях
// const fooArr = () => console.log('this :>> ', this);
// fooArr();

// const user2 = {
//   name: 'Poly',
//   syHi() {
//     console.log('this :>> ', this);
//     const foo = () => console.log('this :>> ', this.name);
//     foo();
//   },
// };

// user2.syHi()
// const f1 = user2.syHi;
// f1();

//Метод call()
// const user = {
//   name: 'Poly',
//   syHi(params) {
//     console.log('params :>> ', params);
//     console.log('Hello, ', this.name);
//   },
// };

// const userMango = {
//   name: 'Mango',
// };

// user.syHi.call(userMango, 15);

//Метод apply() (масив параметрів)
// const user = {
//   name: 'Poly',
//   syHi(params) {
//     console.log('params :>> ', params);
//     console.log('Hello, ', this.name);
//   },
// };

// const userMango = {
//   name: 'Mango',
// };

// user.syHi.apply(userMango, [15]);

//Метод bind()

const user = {
  name: 'Poly',
  syHi(params) {
    console.log('params :>> ', params);
    console.log('Hello, ', this.name);
  },
};

const userMango = {
  name: 'Mango',
};

// user.syHi.bind(userMango, 15)();
const f1 = user.syHi.bind(userMango, 15);
// f1();

console.log(f1 === user.syHi);
