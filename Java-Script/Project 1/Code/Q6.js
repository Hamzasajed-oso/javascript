
  function calculate(){
    var field1=document.getElementById("num1").value;

    var grade=parseFloat(field1);

    if(!isNaN(grade)){
        if( grade>=90 ){
          document.getElementById("answer").innerHTML="You got an A grade on " + grade +" Numbers";
        }
        else if( grade>=80 && grade<90 ){
          document.getElementById("answer").innerHTML="You got a B grade on " + grade +" Numbers";
        }
        else if( grade>=70 && grade<80 ){
          document.getElementById("answer").innerHTML="You got a C grade on " + grade +" Numbers";
        }
        else if( grade>=60 && grade<70 ){
          document.getElementById("answer").innerHTML="You got a D grade on " + grade +" Numbers";
        }
        else{
          document.getElementById("answer").innerHTML="You Failed on " + grade +" Numbers";
        }
    }
  }