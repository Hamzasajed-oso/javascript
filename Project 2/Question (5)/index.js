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


  numlen = number.length;

  console.log(numlen);

  if(numlen%2 == 0){
    console.log("number length is even");
    numlen = numlen/2;

    sumtotal = 0;

    for(let i =0; i<numlen; i++){

      sumtotal = sumtotal + parseFloat(number[i]) ;

    }

    console.log(`The sum of half values is ${sumtotal}`);
  }
  else{
    console.log("number length is odd");
    numlen = Math.ceil(numlen/2) ;

    // console.log(numlen);

    sumtotal = 0;

    for(let i =0; i<numlen; i++){

      sumtotal = sumtotal + parseFloat(number[i]) ;

    }

    console.log(`The sum of half values is ${sumtotal}`);

  }

}