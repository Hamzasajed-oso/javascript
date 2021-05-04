
  
  var randomnum1 = Math.floor(Math.random() * (50 - 10 + 1)) + 10;
  var randomnum2 = Math.floor(Math.random() * (50 - 10 + 1)) + 10;

  function startquestion(){

    document.getElementById("randomnum1").innerHTML=" &nbsp;&nbsp; " + randomnum1;

    document.getElementById("randomnum2").innerHTML=" + " + randomnum2;
    
    document.getElementById("randomnum3").innerHTML="_______";
  }

  
  
  function calculate(){
    var useranswer=document.getElementById("num1").value;

    var answer = parseFloat(randomnum1) + parseFloat(randomnum2);
    
    if( parseFloat(useranswer) == answer ){
      document.getElementById("answer").innerHTML=" Congratulations!!!! The Answer is correct "  ;
    }
    else{
      document.getElementById("answer").innerHTML="The Answer is In-correct ... It Should have been : " + answer  ;
    }

  }