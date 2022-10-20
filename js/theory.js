//Node.js
//Node.js — це JavaScript–оточення побудоване на JavaScript–рушієві Chrome V8.

//Встановлення
//https://nodejs.org/uk/
//https://habr.com/ru/company/timeweb/blog/541452/

//npm
// npm init - ініціалізує npm в проекті і створює файл package.json
// npm install - встановлює всі залежності, перелічені в package.json
// npm install [package-name] - встановить пакет локально у папку node_modules
// npm uninstall [package-name] - видалить пакет, встановлений локально і оновить package.json
// npm start і npm test - запустить скрипт start або test, розташований в package.json
// npm run [custom-script] - запустить кастомний скрипт, розташований в package.json
// npm outdated - використовується для пошуку оновлень, виявить сумісні версії програмно і виведе список доступних оновлень
// npm update - оновить всі пакети до максимально дозволеної версії

//npm-скрипти

// Команди npm install і npm uninstall мають три прапорці.

// --save - вказує, що додається залежність, яка увійде до фінального продукту. Пакет буде встановлений локально, в папку node_modules і буде доданий запис в поле dependencies в package.json.
// --save-dev - вказує, що додається залежність розробки. Пакет буде встановлений локально в папку node_modules, і буде доданий запис в поле devDependencies в package.json.
// --global - вказує, що додається глобальна залежність, тобто інструмент, який доступний для будь-якого проекту. Пакет буде встановлений глобально (в систему).

//Управління кешем
//npm cache clean

//Модульність коду

//Named export

//Експорт до оголошення
//export let months = ['Jan', 'Feb', 'Mar', 'Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

//Експорт окремо від оголошення
// function sayHi(user) {
//   alert(`Hello, ${user}!`);
// }

// function sayBye(user) {
//   alert(`Bye, ${user}!`);
// }

// export { sayHi, sayBye };

//Імпорт *

import newSayHi from "./main.js";
// console.log("months :>> ", arr);
newSayHi("Poly");
// 📁 main.js
// import {sayHi, sayBye} from './say.js';

// sayHi('John'); // Hello, John!
// sayBye('John'); // Bye, John!

// import * as say from './say.js';

// say.sayHi('John');
// say.sayBye('John');

//Імпорт «як»

// import {sayHi as hi, sayBye as bye} from './say.js';

// hi('John'); // Hello, John!
// bye('John'); // Bye, John!

//Експортувати "як"

// export {sayHi as hi, sayBye as bye};

//Default export

// export default function myFunc() {
//     // ...
//   }

// export default class MyClass {
//     // ...
//   }
