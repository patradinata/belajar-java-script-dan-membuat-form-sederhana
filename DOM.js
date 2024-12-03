const submitAction = document.getElementById("formDataDiri");
submitAction.addEventListener("submit", function (event) {
  const inputNama = document.getElementById("inputNama").value;
  const inputDomisili = document.getElementById("inputDomisili").value;
  const hiddenMessage = `Halo ${inputNama} bagaimana keadaan cuaca di ${inputDomisili} ?`;
  document.getElementById("messageAfterSubmit").innerText = hiddenMessage;
  event.preventDefault();
});

function darkMode() {
  const darkMode = document.querySelector(".btn-dark-theme");
  darkMode.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
      darkMode.innerHTML = "Light mode";
    } else {
      darkMode.innerHTML = "Dark mode";
    }
  });
}

darkMode();

// const input = document.querySelector("#text").addEventListener("keydown", function () {
//   alert("kamu sudah menekan tombol di keyboard !");
// });
