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

  numfirstdigit = number[0];
  numlastdigit = number%10;

  // console.log(number.length);

  if(number.length > 2){
    console.log(`First digit is : ${numfirstdigit}`);
    console.log(`First digit is : ${numlastdigit}`);
      if(numfirstdigit == numlastdigit){
        console.log("The First and Last digit of number are same");
      }
      else{
        console.log("The First and Last digit of number are NOT same");
      }

  }
  else{
    console.log("ERROR!!! Try Again");
  }

  
}