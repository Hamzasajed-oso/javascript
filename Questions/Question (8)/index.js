
  function calculate(){
    var field1=document.getElementById("num1").value;

    var result=parseFloat(field1);

    if(!isNaN(result)){
      switch(result){
        case 1:
          document.getElementById("answer2").innerHTML="The value converted is : I ";
        break;
  
        case 2:
          document.getElementById("answer2").innerHTML="The value converted is : II " ;
        break;
  
        case 3:
          document.getElementById("answer2").innerHTML="The value converted is : III " ;
        break;
  
        case 4:
          document.getElementById("answer2").innerHTML="The value converted is : IV " ;
        break;
  
        case 5:
          document.getElementById("answer2").innerHTML="The value converted is : V " ;
        break;
  
        case 6:
          document.getElementById("answer2").innerHTML="The value converted is : VI " ;
        break;
  
        case 7:
          document.getElementById("answer2").innerHTML="The value converted is : VII " ;
        break;
  
        case 8:
          document.getElementById("answer2").innerHTML="The value converted is : VIII " ;
        break;
  
        case 9:
          document.getElementById("answer2").innerHTML="The value converted is : IX " ;
        break;
  
        case 10:
          document.getElementById("answer2").innerHTML="The value converted is : X " ;
        break;
  
        default:
          document.getElementById("answer2").innerHTML="Invalid number has been input" ;
      }
    }
    
    

  }