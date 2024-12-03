document.addEventListener("DOMContentLoaded", function () {
  const icons = document.querySelector("i");
  icons.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });
});

const usia = 18;
switch (usia) {
  case 18:
    console.log("kamu masih sekolah");
    break;
  case 23:
    console.log("kamu sudah kuliah");
    break;
}

const food = [
  {
    name: "Pizza",
    price: 10000,
    alamat: "Krui Pesisir Barat",
  },
  {
    name: "Roti",
    price: 5000,
    alamat: "Surabaya",
    title: "Kfc Donad",
  },
  {
    name: "Burger",
    price: 15000,
    alamat: "Bandung",
    title: "Labuhan Jukung",
  },
];

const foodies = food.filter((name) => name.name === "Pizza");
console.log(foodies);

const numbers = [1, 5, 7, 8, 9, 12, 7, 5];
numbers.forEach((element, index) => {
  numbers[index] = element * 2;
});
console.log(numbers);

const users = ["andi", "budi", "bambang", "dodi"];
const copyUser = [];

users.forEach((user) => copyUser.push(user));
console.log(copyUser);

const user = [
  { name: "Budi", gender: "Pria" },
  { name: "Firdaus", gender: "Pria" },
  { name: "Dodi", gender: "Pria" },
  { name: "Rahmad", gender: "Pria" },
  { name: "Riska", gender: "Perempuan" },
];

const refactUser = user.map((users) => {
  if (user.gender === "Pria") {
    return {
      ...users,
      gender: "male",
    };
  }
  return users;
});

console.log(refactUser);

// // Using and chaining catch () method
// const p1 = new Promise((resolve, reject) => {
//   resolve("Success");
// });

// p1.then((value) => {
//   console.log(value); // "Success!"
//   throw new Error("oh, no!");
// })
//   .catch((e) => {
//     console.error(e.message); // "oh, no!"
//   })
//   .then(
//     () => console.log("after a catch the chain is restored"), // "after a catch the chain is restored"
//     () => console.log("Not fired due to the catch")
//   );

// // The following behaves the same as above
// p1.then((value) => {
//   console.log(value); // "Success!"
//   return Promise.reject("oh, no!");
// })
//   .catch((e) => {
//     console.error(e); // "oh, no!"
//   })
//   .then(
//     () => console.log("after a catch the chain is restored"), // "after a catch the chain is restored"
//     () => console.log("Not fired due to the catch")
//   );

// Callback hell
// fetchData((data) => {
//   process(data, (result) => {
//     save(result, () => {
//       console.log("Saved!");
//     });
//   });
// });

// // Using Promises
// fetchData()
//   .then(process)
//   .then(save)
//   .then(() => console.log("Saved!"));

// // async/await (ES8)
// async function handleData() {
//   const data = await fetchData();
//   const result = await process(data);
//   await save(result);
//   console.log("Saved!");
// }

// Eror handling

// class NetworkError extends Error {}

// try {
//   throw new Error("failed to fetch data");
// } catch (error) {
//   if (error instanceof NetworkError) {
//     console.log(error.message);
//     console.error(error.stack);
//   }
// }

const products = [
  { id: 1, name: "product1", price: 40 },
  { id: 2, name: "product2", price: 50 },
  { id: 3, name: "product3,", price: 60 },
];

const expensiveProducts = [];
for (let i = 0; i < products.length; i++) {
  if (products[i].price > 50) {
    expensiveProducts.push(products[i]);
  }
}

// memfilter nilai null atau tidak terdefenisi
// tanpa method filter

const values = [10, null, 20, undefined, 30];

const filteredValues = [];
for (let i = 0; i < values.length; i++) {
  if (values[i] !== null && values[i] !== undefined) {
    filteredValues.push(values[i]);
  }
}

// dengan method filter
// dengan filter kode lebih ringkas dan mudah dibaca

const filterValues = [10, null, 20, undefined, 30];

const filteredValue = filterValues.filter((value) => value !== null && value !== undefined);

// Constructor function sebelum adanya class di es6

function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.login = function () {
  console.log("Logging in");
};

let admin = new User("admin", 40);

admin.creteProject = function () {
  console.log("Project is created");
};

console.log(admin.hasOwnProperty("login"));
admin.login();

admin.creteProject();

let projectManager = new User("pm", 35);
projectManager.login();

const Manager = {
  name: "Bima",
  age: 22,
  jobs: "Mahasiswa",
};

const Intens = {
  name: "Budi",
  age: 25,
  jobs: "Bos besar",
};

function sayHi() {
  console.log(`Hello my name is ${this.name}`);
}

Manager.sayHi = sayHi;
Intens.sayHi = sayHi;

Manager.sayHi();
Intens.sayHi();

const sayHii = [
  {
    name: "Robusta Brazil",
    harga: 12000,
    alamat: "Pugung Bambang",
  },
  {
    name: "Caffucino latte",
    harga: 17000,
    alamat: "Bengkulu",
  },

  {
    name: "Luwak white coffe",
    harga: 25000,
    alamat: "Padang haluan",
  },
];

const sayHello = sayHii.filter((product) => product.name === "Robusta Brazil");
console.log(sayHello);

const sampleProducts = [
  { id: 1, name: "Laptop", category: "Electronics", price: 1000 },
  { id: 2, name: "Phone", category: "Electronics", price: 500 },
  { id: 3, name: "Shirt", category: "Apparel", price: 50 },
  { id: 4, name: "Shoes", category: "Apparel", price: 80 },
  { id: 5, name: "Watch", category: "Accessories", price: 200 },
];

function getProductsByCategory(products, category) {
  return products.filter((product) => product.category === category);
  /**
   * TODO:
   * Gunakan metode array immutable untuk mengembalikan array produk yang termasuk dalam kategori yang diberikan.
   */
}

function findProductById(products, id) {
  return products.find((product) => product.id === id);
  /**
   * TODO:
   * Gunakan metode array immutable untuk mengembalikan produk dengan ID yang cocok.
   */
}

function calculateTotalPrice(products) {
  const total = products.reduce((price, product) => price + product.price, 0);
  return total;

  /**
   * TODO:
   * Gunakan metode array immutable untuk menghitung total harga semua produk.
   */
}

function applyDiscount(products, discount) {
  return products.map((product) => ({
    ...product,
    price: product.price - product.price * (discount / 100),
  }));

  /**
   * TODO:
   * Gunakan metode array immutable untuk mengembalikan array baru,
   * di mana setiap produk memiliki harga yang sudah dikurangi dengan diskon yang diberikan.
   */
}

console.log(getProductsByCategory(sampleProducts, "Electronics")); // Should return products with id 1 and 2
console.log(calculateTotalPrice(sampleProducts)); // Should return 1830
console.log(applyDiscount(sampleProducts, 10)); // Should return products with prices reduced by 10%
console.log(findProductById(sampleProducts, 3)); // Should return the product with id 3
