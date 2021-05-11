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


  arraynum = number.split("")

  const numlength = arraynum.length;

  
  if(numlength%2 != 0){
    console.log("The number is odd");
    console.log(numlength);
    miiddlenumindex = Math.floor(numlength/2);
    // console.log(miiddlenumindex);
    middlenum = number[miiddlenumindex];
    console.log(`the middle num is : ${middlenum}`);

        if(middlenum%2 == 0){
          console.log(`Middle Number is Even`);
        }
        else{
          console.log(`Middle Number is Odd`);
        }
    

  }
  else{
    console.log("The number is even");
    console.log(numlength);
    miiddlenumindex2 = Math.floor(numlength/2);
    miiddlenumindex1 = miiddlenumindex2 - 1;

    middleval1 = number[miiddlenumindex1];
    middleval2 = number[miiddlenumindex2];

    console.log(`middle val 1 is : ${middleval1}`);
    console.log(`middle val 2 is : ${middleval2}`);

    sum = parseFloat(middleval1) + parseFloat(middleval2) ;

    console.log(sum);

    if(sum % 2 == 0){
      console.log(`Sum of Middle Number is Even`);
    }
    else{
      console.log(`Sum of Middle Number is Odd`);
    }

  }

  
}