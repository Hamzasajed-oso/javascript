
  function calculate(){
    var calories=document.getElementById("num1").value;
    var fats=document.getElementById("num2").value;

    var caloriesfromfat = fats*9;

    var percentcalories = (caloriesfromfat / calories)*100;

      if(calories>0 && fats>0  && percentcalories>30 && caloriesfromfat<calories){
        document.getElementById("answer").innerHTML="The Percentage of calories is : " + percentcalories + "%";
      }
      else if(calories>0 && fats>0 && percentcalories<30 && caloriesfromfat<calories){
        document.getElementById("answer").innerHTML="The Percentage of calories is : " + percentcalories + "% .......The Food is Low in Fats ";
      }
      else{
        document.getElementById("answer").innerHTML="ERROR!! Invalid entry " ;
      }

       
    
  }