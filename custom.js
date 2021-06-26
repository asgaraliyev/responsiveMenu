const Openhamburger = document.querySelector(".sidebar");
const closem = document.querySelector(".close");
const hamurgermenustartBTN = document.getElementById("hamurgermenustartBTN");

hamurgermenustartBTN.addEventListener("click", () => {
  Openhamburger.classList.add("active");

});

closem.addEventListener("click", () => {
  Openhamburger.classList.remove("active");
    
});
