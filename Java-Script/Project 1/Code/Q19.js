
  function calculate(){
    var name=document.getElementById("num1").value;
    var package=document.getElementById("num2").value;
    var hours=document.getElementById("num3").value;

    var BillpackageB = ((hours-20)*1)+14.95

    var BillpackageA = ((hours-10)*2)+9.95


    if(package=="C" || package=="c"){
      document.getElementById("answer2").innerHTML="Welcome Mr/Mrs " + name;
      document.getElementById("answer").innerHTML="Your Bill is $19.95 ";
    }

    else if(package=="B" || package=="b"){

        if(hours<=20){
          document.getElementById("answer2").innerHTML="Welcome Mr/Mrs " + name;
          document.getElementById("answer").innerHTML="Your Bill is $14.95 ";
        }
        else if(hours>20){
          document.getElementById("answer2").innerHTML="Welcome Mr/Mrs " + name;
          document.getElementById("answer").innerHTML="Your Bill is $" + BillpackageB;
        }

    }

    else if(package=="A" || package=="a"){

      if(hours<=10){
        document.getElementById("answer2").innerHTML="Welcome Mr/Mrs " + name;
        document.getElementById("answer").innerHTML="Your Bill is $9.95 ";
      }
      else if(hours>10){
        document.getElementById("answer2").innerHTML="Welcome Mr/Mrs " + name;
        document.getElementById("answer").innerHTML="Your Bill is $" + BillpackageA;
      }

  }

  else{

        document.getElementById("answer2").innerHTML="Welcome Mr/Mrs " + name;
        document.getElementById("answer").innerHTML="You have chosen an Invalid Package ..Please Select from A/B/C only";

  }

  }