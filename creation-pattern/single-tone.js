let flag = false;

class User {
  constructor(name, age) {
    if (!flag) {
      this.name = name;
      this.age = age;
      flag = this;
    } else {
      return flag;
    }
  }
}

const ahmed = User("ahmed", 22);
const ali = User("ali", 23);

class API {
  static #instance;
  #base;
  constructor(baseUrl) {
    if (API.#instance) return API.#instance;
    this.#base = baseUrl;
    API.#instance = this;
  }

  async get() {
    const res = await fetch(this.#base + path);
  }
}

let x = new API("/refai/v1/api");
