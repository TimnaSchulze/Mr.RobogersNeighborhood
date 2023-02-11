//User Interface Logic

window.onload = function() {
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
  event.preventDefault();
  };
};

document.getElementById("roboLanguage").addAttribute("class", "hidden");

document.getElementById("tryAgain").addEventListener("click", function() {
  let form = document.querySelector("form");
  form.reset();
});

//Business Logic

button.onclick = function() {

}