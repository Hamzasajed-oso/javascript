
  function calculate(){
    var numofchecks=document.getElementById("num1").value;

    var fee1 = (numofchecks*0.10) + 10;
    var fee2 = (numofchecks*0.8) + 10;
    var fee3 = (numofchecks*0.6) + 10;
    var fee4 = (numofchecks*0.4) + 10;

    if(numofchecks >0 && numofchecks < 20){
      document.getElementById("answer").innerHTML="Your total ammount payable is : $" + fee1;
    }
    else if(numofchecks >= 20 && numofchecks <= 39){
      document.getElementById("answer").innerHTML="Your total ammount payable is : $" + fee2;
    }
    else if(numofchecks >= 40 && numofchecks <= 59){
      document.getElementById("answer").innerHTML="Your total ammount payable is : $" + fee3;
    }
    else if(numofchecks >= 60){
      document.getElementById("answer").innerHTML="Your total ammount payable is : $" + fee4;
    }
    else{
      document.getElementById("answer").innerHTML=" ERROR!!! You have entered an invalid number" ;
    }

  }