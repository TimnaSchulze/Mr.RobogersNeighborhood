//User Interface Logic
form.onload = function() {
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
  event.preventDefault();

document.getElementById("submit").addAttribute("class", "hidden");

function roboLanguage() {
  let numberInput = document.querySelector("userNumber").value;
  };
document.getElementById("submit").innerHTML= "Mr. Roboger says" + numberInput + " .";

document.getElementById("submit").removeAttribute("class","hidden");
};

document.getElementById("tryAgain").addEventListener("click", function() {
  let form = document.querySelector("form");
  form.reset();
});

//Business Logic

