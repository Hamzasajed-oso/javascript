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

  number = number.split("");

  console.log(number);

  const numreverse = number.reverse();

  console.log(numreverse);

  if( parseFloat(number) == parseFloat(number.reverse())   ){
    console.log("The Entered Number is Pelindrome")
  }
  else{
    console.log("The Entered Number is NOT Pelindrome")
  }

}