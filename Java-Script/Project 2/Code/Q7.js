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

  arr = number.split("");

    if(number.length == 3 ){
        console.log('Entered Numbers are: ' + number);
        arr[0] = arr[0]*arr[0]*arr[0];
        arr[1] = arr[1]*arr[1]*arr[1];
        arr[2] = arr[2]*arr[2]*arr[2];
        sum = arr[0] + arr[1] + arr[2];
        if(sum == number){
            console.log(sum + '' + " It's a ArmStrong Number ");
        }
        else{
            console.log(sum + '' + "  It's Not a ArmStrong Number");
        }

  }
  else{
    console.log("InVaLiD OpeRaToR!! TrY Again (Number should only be 3 digits)");
  }

  
}