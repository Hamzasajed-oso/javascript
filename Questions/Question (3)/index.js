
  function calculate(){
    var field1=document.getElementById("num1").value;
    // var field2=document.getElementById("num2").value;

    var result= 9/5 * parseFloat(field1) + 32 ;

    if(!isNaN(result)){
        document.getElementById("answer").innerHTML="The Temprature of " + field1 + "°C converted in ferenheight is : " + result;
    }
  }