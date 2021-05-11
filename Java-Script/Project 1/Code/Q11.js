
  function calculate(){
    var mass=document.getElementById("num1").value;

    var weight = mass*9.8;

    if(!isNaN(weight)){
        document.getElementById("answer").innerHTML="The Weight is : " + weight + " KG";
        if(weight>1000){
          document.getElementById("answer2").innerHTML="The Object is Too Heavy  ";
        }
        else if(weight<10){
          document.getElementById("answer2").innerHTML="The Object is Too Light  ";
        }
    }
  }