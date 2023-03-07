var randomNumber1 = Math.floor(Math.random()*6);
var randomNumber2 = Math.floor(Math.random()*6);
var listOfImage = ["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"];
document.querySelector(".img1").setAttribute("src","images/"+listOfImage[randomNumber1]);
document.querySelector(".img2").setAttribute("src","images/"+listOfImage[randomNumber2]);
{
    if (randomNumber1>randomNumber2){
      document.querySelector("h1").textContent = "🚩Player 1 Won!";
    }else if(randomNumber1<randomNumber2){
        document.querySelector("h1").textContent = "Player 2 Won!🚩";
    }else{
      document.querySelector("h1").textContent = "DRAW";
    }
  }
