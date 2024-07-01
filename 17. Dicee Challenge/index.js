function rollDice(){
    var numb = Math.floor((Math.random()*6)+1);
    return numb;
}

function formatName(numb){
    return "dice"+ numb +".png";
}

function title(numb1, numb2){
    if(numb1 == numb2){
        return "Draw roll again."
    } else if(numb1 > numb2){
        return "Player 1 Wins!"
    } else {
        return "Player 2 Wins!"
    }
}

var dice1 = document.querySelector(".img1");
var dice2 = document.querySelector(".img2");
var result = document.querySelector(".container h1")

numb1 = rollDice();
numb2 = rollDice();



result.textContent = title(numb1, numb2);
dice1.src = "./images/" + formatName(numb1);
dice2.src = "./images/" + formatName(numb2);
