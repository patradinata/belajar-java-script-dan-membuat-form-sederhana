// hitunglah rumus celcius beriikut ini
// 9 dibagi5 dikali celcius + 32

const celcius = 90;
const fahrenheit = (9 / 5) * celcius + 32;

console.log("Hasil Input:", fahrenheit);

const celciusInFahrenheit = 50;
const fahrenheitInCelcius = (9 / 5) * celciusInFahrenheit + 32;

console.log("Hasil Input:", fahrenheitInCelcius);

let inFahrenheit = 90;
let inCelcius = (8 / 5) * inFahrenheit + 32;

console.log("Hasil Input:", inCelcius + " inFahrenheit ");

const name = {};
const price = { name: "patra", harga: 2000 }; //objek literal

console.log(price);

// buatlah function bernama hello yag menerima dua argumen 'name dan origin'
// kembalikan nilainya hasil dari pemanggilan function hello
// nilai default dari pemanggilan argumen origim adalah lampung
// buatlah variabel bernama azmi dengan hasil pemanggilan dari fungsi hello dengan nilai default adalah jakarta
// buatlah variabel bernama patra dengan hasil pemanggilan dari function hello tanpa dengan argumen dengann nilai default adalah patra!

function hello(name, origin = "Lampung") {
  return `Halo! nama saya adalah ${name} alamat saya di ${origin}`; //template literals yang menggunakan karakter `` dan ${}
}

const azmi = hello("azmi", "jakarta");
const patra = hello("patra");
// function gello

console.log(azmi, patra);

// dibawah ini merupakan contoh penggunaan objek literal yaitu objek dengan curve bracket {}
const barang = {};
const item = { harga: "sepatu", harga: 25000, harga: true };

console.log(item);

// ini digunakan untuk mengakses properti objek
const harga = {
  name: "dicoding",
  "last name:": "indonesia",
  age: 20 + "tahun",
};

console.log(harga.age);

const dicoding = {
  name: "dicoding",
  "last name": "indonesia",
  age: 9,
};

console.log(dicoding);

const fikri = {
  name: "fikri",
  "last name": "krui",
  age: 9,
};

console.log(fikri);

const rizki = {
  name: "pesawaran",
  "last name": "uap",
  asal: "lampung",
};

console.log(rizki);

const menghitungCelius = 200;
const menghitungFahrenheit = (9 / 5) * menghitungCelius + 32;

console.log("hasil Input:", menghitungFahrenheit, "fahrenheitt");

function everyone(name, asal = "pesisir barat") {
  return `halo perkenalkan nama saya ${name} saya tinggal di ${asal}.`;
}

const rico = everyone("rico", "Krui");
const yusrizal = everyone("yusrizal");

console.log(rico, yusrizal);

// mengakses object menggunakan square bracket
const bebek = {
  name: "patra dinata",
  "last name": "indonesia",
  age: 20,
};

console.log(bebek["name"]); //output: patra dinata

const indonesia = {
  alamat: "lampung",
  "tempat lahir": "surabaya",
  usia: 20,
};

const usia = 30;
console.log(usia);

// const object = {};
const tangga = {
  name: "laptop",
  "last name": "asus",
  pemakaian: "sudah sebulan",
  age: 25,
};

console.log(tangga["pemakaian"]); // [] simbol ini adalah square bracket

const hargaAyam = true;
if (hargaAyam == true) {
  console.log("emangg");
} else {
  console.log("iyaaa");
}

const hargaSapi = 60000;
const hargaAyamDiPasar = 40000;

if (hargaAyamDiPasar === 45000) {
  console.log("kok tau");
} else {
  console.log("salahh");
}

// pengondisian

const object = {
  "last name": "Last name",
  "first name": "sudah setahun",
  umur: 90,
};
console.log(object["first name"]);

const object2 = {
  name: "patra dinata",
  "last name": "lampung",
  "first name": "indonesia",
  umur: 90,
};
// delete digunakan untuk menghapus properti di objek
delete object2.umur;
console.log(object2); //output nya adalah name: 'patra dinata 'last name': 'lampung' 'first' name: 'indonesia'

const array = [3, 4];
console.log(typeof array); // output nya object

const ayam = [true, false];
console.log(typeof ayam);

const cinta = ("aku sayang kamu", "aku cinta kamu", "aku suka banget sama kamu"); //array
console.log(typeof cinta);

const myArray = ["Ayam", "handphone", "laptop", "android"];
myArray.reverse(); //reverse digunakan untuk membalik array. metode reverse() akan mengembalikan array secara terbalik
console.log(myArray); //output nya android laptop handphone web

const iniArray = ["7", "9", "10", "15", "20"];
console.log(iniArray[0]);

const arrayKu = ["8", "27", "38", "90", "15", "10", "120"];
arrayKu.reverse(); //reverse digunakan untuk memengil array secara terbalik
console.log(arrayKu);

const isArray = ["ayam", "cicak", "ayu", "carles", "rahmat", "lina", "firdaus", "cepong"];
isArray.sort(); //digunakan untuk mengakses array secara alfhabet / berurutan
console.log(isArray);

function katanya(name, origin = "Jakarta") {
  return `Halo nama saya ${name} saya tinggal di ${origin}`;
}

const cepong = hello("cepong", "surabaya");
const rama = hello("rama");

console.log(cepong, rama);

const ituArray = ["true", "false", "enggak_false", "ini_false"];
ituArray.sort();
console.log(ituArray);

const harga6 = {
  name: "patra dinata",
  "alamat saya": "way sindi hanuan",
  status: "mahasiswa",
  umurSaya: 20,
};

// delete harga6.name;

delete harga6["alamat saya"];
console.log(harga6);

// Funvtion
function greetWorld() {
  console.log("hello world");
}
greetWorld();

function convertToCelcius(temperature = 90) {
  const temperatureInFahrenheit = (9 / 5) * temperature + 32;

  console.log("Hasil Konversi:", temperatureInFahrenheit + " Fahrenheit ");
}

convertToCelcius();

for (let i = 0; i <= 100; i++) {
  console.log("Turu bangg udah lagi begadang nya!");
}

const nilaiKamu = (nilai) => {
  let result;
  if (nilai >= 70) {
    return "";
  }
};

for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}

// class Nilai {
//   constructor(name, alamat, sekolah) {
//     super(name, alamat, sekolah);
//     this.name = name;
//     this.alamat = alamat;
//     this.sekolah = sekolah;
//   }
//   grade() {
//     return `${this.name} sedang tidur`;
//   }
// }

// class Rabbit {
//   constructor(name, alamat, sekolah) {
//     this.name = name;
//     this.alamat = alamat;
//     this.sekolah = sekolah;
//   }
//   address() {
//     return `${this.name} sedang makan`;
//   }
// }

// class Animal {
//   constructor(name, alamat, sekolah) {
//     super(name, alamat, sekolah);
//     this.name = name;
//     this.alamat = alamat;
//     this.sekolah = sekolah;
//   }

//   school() {
//     return `${this.name} hallo `;
//   }
// }

// class Rabbit extends Animal {
//   school() {
//     this.alamat = true;
//   }
// }

// const Rabbit = new Rabbit("ali", 12);
// const Animal = new Animal("fikri", 23);
// console.log(Rabbit, Animal);

// const memoryInformation = memoryUsage();
// console.log(memoryInformation);
// mengekspor variable
// export const namesaya = "John";
// export const favoriteFood = ["pizza", "pasta", "sushi"];

// export function sayHi(namesaya) {
//   console.log(`Hi, ${namesaya}!`);
// }

const number = [1, 2, 4, 6, 7, 12, 14, 18, 19, 20, 22, 24, 22];

const numbe = number.filter((angka) => angka % 2 === 0);
console.log(numbe);

const map = new Map([
  ["name", "Robusta Brazil"],
  ["name", "White-coffe", "price", 20000],
  ["price", 12000],
]);

console.log(map);

// Nested try block
try {
  try {
    throw new Error("oopss ada eror!");
  } finally {
    console.log("finally");
  }
} catch (ex) {
  console.error("outer", ex.message);
}

// Returning from a finally block !
(() => {
  try {
    try {
      throw new Error("oops");
    } catch (ex) {
      console.error("inner", ex.message);
      throw ex;
    } finally {
      console.log("finally");
      return;
    }
  } catch (ex) {
    console.error("outer", ex.message);
  }
})();

function isValidJson(text) {
  try {
    JSON.parse(text);
    return true;
  } catch {
    return false;
  }
}

// BigInt prototype
BigInt.prototype.toJSON = function () {
  return JSON.rawJSON(this.toString());
};
const data = { a: 1n };
JSON.stringify(data);
// '{"a":1}'

// Inheritance

class Rabbit {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} sedang menyanyi`);
  }
}
class Dog extends Rabbit {
  constructor(name) {
    super(name);
  }
  speak() {
    console.log(`${this.name} barks`);
  }
}

const d = new Dog("mitzie");
d.speak();

class dateFormatter extends Date {
  getFormattedDate() {
    const months = ["januari", "februari", "maret", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "desember"];
    return `${this.getDate()}-${months[this.getMonth()]}-${this.getFullYear()}`;
  }
}

console.log(new dateFormatter("August 27, 11, 2023").getFormattedDate());

let passing = [
  {
    judul: "Kenangan terindah",
    album: "three",
    post: "Album Three Js",
  },
  {
    judul: "Januari",
    album: "maret",
    getFullYear: 2024,
    months: "November",
  },
];

const passin = passing.filter((months) => months === "Kenangan terindah");
console.log(passin);
