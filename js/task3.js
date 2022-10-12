// todo User

/*
 * Напиши клас User який створює об'єкт із властивостями login та email. Оголоси приватні властивості #login та #email, доступ до яких зроби через геттер та сеттер login та email.
 */

class User {
  #email;
  #login;
  constructor({ email, login }) {
    this.#email = email;
    this.#login = login;
  }
  get email() {
    return this.#email;
  }
  set email(value) {
    this.#email = value;
  }
  get login() {
    return this.#login;
  }
  set login(value) {
    this.#login = value;
  }
}

const mango = new User({
  login: 'Mango',
  email: 'mango@dog.woof',
});

mango.login = 'Mangodoge';
console.log(mango.login);

mango.email = 'mango@mail.com';
console.log(mango.email);

const poly = new User({
  login: 'Poly',
  email: 'poly@mail.com',
});

console.log(poly.login);
console.log(poly.email);

poly.login = 'Polycutie';
console.log(poly.login);

poly.email = 'polyrobo@mail.com';
console.log(poly.email);
