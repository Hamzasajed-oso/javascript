
  function areaofcircle(){
    var radius=document.getElementById("num1").value;

    var areacircle = 3.142*(radius*radius); 

    console.log(areacircle);

    if(!isNaN(radius)){
        document.getElementById("answer").innerHTML="The Area of Circle is : " + areacircle;
    }
  }



  function areaofrectangle(){
    var length=document.getElementById("num2").value;
    var width=document.getElementById("num3").value;

    var arearect = length*width;

    console.log(arearect);

    if(!isNaN(length)){
        document.getElementById("answer2").innerHTML="The Area of Rectangle is : " + arearect;
    }
  }

  

  function areaoftriangle(){
    var height=document.getElementById("num4").value;
    var base=document.getElementById("num5").value;

    var areatri = height*base;

    console.log(areatri);

    if(!isNaN(height)){
        document.getElementById("answer3").innerHTML="The Area of Triangle is : " + areatri;
    }
  }

