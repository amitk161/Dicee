var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var image1 = "dice" + randomNumber1 + ".png";
var image1Source = "images/" + image1;

var randomimage1 = document.querySelectorAll("img")[0]; 
randomimage1.setAttribute("src", image1Source);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var image2Source = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", image2Source);

if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if(randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}
