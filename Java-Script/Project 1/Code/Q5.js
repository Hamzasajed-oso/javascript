
  function calculate(){
    var field1=document.getElementById("num1").value;
    var field2=document.getElementById("num2").value;
    var field3=document.getElementById("num3").value;

    var average=(parseFloat(field1)+parseFloat(field2)+parseFloat(field3))/3;

    if(!isNaN(average)){

      if(average>=100){
        document.getElementById("answer").innerHTML="The Average is : " + average;
        document.getElementById("answer2").innerHTML="Congratulations! That's a perfect score!";
      }
        
    }
  }