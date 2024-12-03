// document.addEventListener("DOMContentLoaded", () => {
//   const checkbox = document.getElementById("checkbox");
//   const menu = document.getElementById("menu");

//   checkbox.addEventListener("change", () => {
//     if (checkbox.checked) {
//       menu.classList.add("active"); // Tambahkan kelas aktif saat checkbox dicentang
//     } else {
//       menu.classList.remove("active"); // Hapus kelas aktif saat checkbox tidak dicentang
//     }
//   });
// });

const myCelcius = (temperature) => (9 / 5) * temperature + 32;
fahrenheit = myCelcius(90);

console.log("Hasil", fahrenheit);

for (let i = 0; i < 4; i++) {
  console.log("Hello dunia");
}

const bangun = false;

if (bangun) {
  console.log("Pergi magang");
} else {
  console.log("tidur lagi");
}

const arrayOf = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arrayOf.splice(0, 2);
console.log(arrayOf);

const array = typeof arrayOf;

const map = new Map([
  ["name", "patra"],
  ["alamat", "krui"],
]);

console.log(map);

// Contoh pure function
// menghitung total harga pesanan tanpa mengubah input
function calculateTotalPrize(orderItem) {
  return orderItem.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
}

// memfilter dan memetakan data tanpa mengubah array asli
function getActiveUserNames(users) {
  return users.filter((user) => user.isActive).map((user) => user.name);
}

// membuat objek baru berdasarkan input tanpa mengubah input asli
function createUserProfile(user, address) {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    address: {
      street: address.street,
      city: address.city,
      country: address.country,
    },
  };
}
newUser = createUserProfile({ id: 1, name: "Patra", email: "patra@mail.com" }, { street: "Nama Jalan", city: "Lampung", country: "Indonesia" });
console.log(newUser.address.city);

// menggabungkan dua objek tanpa mengubah objek asli
function mergeSettings(defaultSetting, userSettings) {
  return {
    ...defaultSetting,
    ...userSettings,
  };
}

//ini adalah cara untuk  mengakses objek nya
const currentSettings = mergeSettings({ adblock: true, darkMode: false }, { darkMode: true });
console.log(currentSettings);
console.log(currentSettings.darkMode);

