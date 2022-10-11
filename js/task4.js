// todo bind()

/*
 * Створіть метод counter який буде з this брати "i" і збільшувати його на одиницю. Після повертати "i".
 * Використовуйте замикання та bind, щоб встановити змінній "i" різні значення
 * Виведіть результат у консоль
 */
const objA = {
  i: 0,
};

const objB = {
  i: 0,
};

function counter() {
  this.i += 1;
  //   console.log('this.i :>> ', this.i);
  console.log('objA :>> ', objA);
}

// const objACounter = counter.bind(objA);
// objACounter();
// objACounter();
// objACounter();
// objACounter();
// function counter() {
//   let i = 0;
//   const increm = () => {
//     i += 1;
//     console.log('i :>> ', i);
//   };
//   return increm;
// }

// const seHi = () => console.log('Hello :>> ', user);
// seHi();

// const c = counter();
// c();
// c();
// c();
// c();

const user = {
  name: 'Poly',
};

// const user2 = Object.create(null);

// console.log('user2 :>> ', user2);
