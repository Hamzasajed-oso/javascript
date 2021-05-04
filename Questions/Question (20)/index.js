
  function calculate(){
    var totaltime=document.getElementById("num1").value;
    var starthour=document.getElementById("num2").value;
    var startmin=document.getElementById("num3").value;

    if(starthour>0 && starthour<7 && startmin<60){
      document.getElementById("answer").innerHTML="Your Total cost is : $" + totaltime*0.12;
      document.getElementById("answer2").innerHTML="You started call at " + starthour + ":" + startmin + " And the call lasted " + totaltime +" Minutes " ;

    }
    else if(starthour>=7 && starthour<=19  && startmin<60){
      document.getElementById("answer").innerHTML="Your Total cost is : $" + totaltime*0.55;
      document.getElementById("answer2").innerHTML="You started call at " + starthour + ":" + startmin + " And the call lasted " + totaltime +" Minutes " ;

    }
    else if(starthour>19 && starthour<24 && startmin<60){
      document.getElementById("answer").innerHTML="Your Total cost is : $" + totaltime*0.35;
      document.getElementById("answer2").innerHTML="You started call at " + starthour + ":" + startmin + " And the call lasted " + totaltime +" Minutes " ;

    }
    else {
      document.getElementById("answer").innerHTML="You Have entered invalid time!!!!";
    }

  }