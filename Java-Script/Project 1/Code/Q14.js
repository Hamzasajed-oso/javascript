// formula for discount

// discounted_price = original_price - (original_price * discount / 100)


  function calculate(){
    var unitsperchases=document.getElementById("num1").value;

    var orignalprice=99;

    var p1discount = orignalprice - (orignalprice*20/100) ;
    var p2discount = orignalprice - (orignalprice*30/100) ;
    var p3discount = orignalprice - (orignalprice*40/100) ;
    var p4discount = orignalprice - (orignalprice*50/100) ;

    if(unitsperchases>10 && unitsperchases<19){
      document.getElementById("answer").innerHTML="You got 20% discount and your per item cost is : $" + p1discount;
    }
    else if(unitsperchases>20 && unitsperchases<49){
      document.getElementById("answer").innerHTML="You got 30% discount and your per item cost is : $" + p2discount;
    }
    else if(unitsperchases>50 && unitsperchases<99){
      document.getElementById("answer").innerHTML="You got 40% discount and your per item cost is : $" + p3discount;
    }
    else if(unitsperchases>100){
      document.getElementById("answer").innerHTML="You got 50% discount and your per item cost is : $" + p4discount;
    }
    else{
      document.getElementById("answer").innerHTML="You got 50% discount and your per item cost is : $" + orignalprice;
    }
    
  }