
  function calculate(){
    var field1=document.getElementById("num1").value;
    // var field2=document.getElementById("num2").value;

    const result=parseFloat(field1) * 109.30;
    const euro=parseFloat(field1)* 0.83;

    if(!isNaN(result)){
        document.getElementById("answer").innerHTML= field1 + " Dollars converted in yen are : " + result;

        document.getElementById("answer2").innerHTML= field1 + " Dollars converted in euro are : " + euro;


      }
  }