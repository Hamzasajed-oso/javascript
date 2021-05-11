
  function calculate(){
    var date=document.getElementById("num1").value;
    var day=document.getElementById("num2").value;
    var year=document.getElementById("num3").value;


    var magic=parseFloat(date)*parseFloat(day);
    
    if(!isNaN(magic)){
        if( magic == year ){
          document.getElementById("answer").innerHTML="The Date is magic ";
        }
        else{
          document.getElementById("answer").innerHTML="The Date is  NOT magic";
        }
    }
  }