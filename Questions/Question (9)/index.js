
  function calculate(){
    var field1=document.getElementById("num1").value;
    var field2=document.getElementById("num2").value;
    var field3=document.getElementById("num3").value;
    var field4=document.getElementById("num4").value;


    var Area1=parseFloat(field1)*parseFloat(field2);
    var Area2=parseFloat(field3)*parseFloat(field4);


    if(!isNaN(Area1)){
        document.getElementById("answer").innerHTML="The Area of Rectangle 1 is : " + Area1;
        document.getElementById("answer2").innerHTML="The Area of Rectangle 2 is : " + Area2;

             if(Area1>Area2){
              document.getElementById("answer3").innerHTML="The Area of Rectangle 1 is : " + Area1 + " Which is greater than area 2 "+ Area2 ;
            }
            else{
              document.getElementById("answer3").innerHTML="The Area of Rectangle 1 is : " + Area1 + " Which is smaller than area 2 : "+ Area2 ;
            }

      }
  }