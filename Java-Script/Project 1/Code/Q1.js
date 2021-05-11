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

  if(age % 2 === 1){
    // document.getElementById("demo").innerHTML = "Number is ODD";
    console.log("Number is ODD");
  }
  else{
    // document.getElementById("demo").innerHTML = "Number Is even";
    console.log("Number is Even");
  }
}