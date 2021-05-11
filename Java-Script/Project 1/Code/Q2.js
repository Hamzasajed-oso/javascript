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
  console.log(`My name is ${name} and I am ${num} years old`);
  
  console.log(num);

  if(num>0  && num%1 == 0){
    document.getElementById("demo").innerHTML = "Number is Positive";
  }
  else if(num<0  && num%1 == 0) {
    document.getElementById("demo").innerHTML = "Number Is Negetive";
  }
  else if(num<0 && num%1 !== 0) {
    document.getElementById("demo").innerHTML = "Decimal Number Is Negetive ";
  }
  else{
    document.getElementById("demo").innerHTML = "Decimal Number Is Positive";
  }
}