//User Interface Logic
form.onload = function() {
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
  event.preventDefault();
  };
};

document.getElementById("submit").addAttribute("class","hidden");

//Business Logic

//input userNumber to print array of counting from 0 to userNumber
function roboLanguage() {
  const userNum = document.getElementById("userNumber");
  let numListArr = [];

  numListArr.forEach(function(element) {
    let numCount=0;
    for (let i=0; i <=userNum; i++) {
      if (element === numList[i]) {
        numCount++;
      }
    }
    numListArr.push(element + numCount);
  });

  document.getElementById("submit").innerHTML= "Mr. Roboger says" + numListArr + " .";

  document.getElementById("submit").removeAttribute("class","hidden");
};

document.getElementById("tryAgain").addEventListener("click", function() {
  let form = document.querySelector("form");
  form.reset();
});












