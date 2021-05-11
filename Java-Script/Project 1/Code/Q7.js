
  function calculate(){
    var field1=document.getElementById("num1").value;
    var field2=document.getElementById("num2").value;

    

    if(!isNaN(field2)){
        if(field1>field2){
          document.getElementById("answer").innerHTML="The value " + field1 + " Is greater than this value " + field2;
        }
        else{
          document.getElementById("answer").innerHTML="The value " + field2 + " Is greater than this value " + field1;
        }
    }
  }