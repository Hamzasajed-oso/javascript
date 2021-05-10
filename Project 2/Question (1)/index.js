// ignore this code completely
document.addEventListener("DOMContentLoaded", () => {
  const inputs = document.querySelectorAll("input:not(input[type=submit])");
  const refresh_values = () => {
    for (const input of inputs) {
      window[input.name] = input.value;
    }
  };
  
  document.getElementById("submit").onclick = () => {
    refresh_values();
    main();
  };
});

function main() {
  // write all your code here
  // console.log(`My name is ${name} and I am ${age} years old`);

  const numlength = number.length;
  
  console.log(`The Number You Entered is : ${number}`);

  console.log(`The Length of this number is : ${numlength}`);



}