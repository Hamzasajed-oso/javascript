
  function calculate(){
    var seconds=document.getElementById("num1").value;

    var secindays=86400;
    var secinhours = 3600;
    var secinmin=60;

    if(seconds>=86400){
      document.getElementById("answer").innerHTML=seconds + " seconds is equal to " + seconds/secindays + " days";
    }
    else if(seconds>=3600 && seconds<86400){
      document.getElementById("answer").innerHTML=seconds + " seconds is equal to " + seconds/secinhours + " hours";
    }
    else if(seconds>=60 && seconds<3600){
      document.getElementById("answer").innerHTML=seconds + " seconds is equal to " + seconds/secinmin + " minutes";
    }


    // if(!isNaN(result)){
    //     document.getElementById("answer").innerHTML="The Answer is : " + result;
    // }
  }