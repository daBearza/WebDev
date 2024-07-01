var startFlag = false;
var lvl = 0;
var cntr;
var list = [];

// Initializes the game.
$(document).keydown(function(){
    if(lvl == 0){
        lvl = 1;
        cntr = 0;
        list = [];
        changeTitle(lvl);
        for(var i = 0; i < 50; i++){
            list.push(randomColor());
        }
        selection(list[cntr]);
    }
    //  console.log(list[cntr]);
        
})

// Everytime I click on the color it checks the sequence.
$(".btn").click(function(event){
    var color = event.target.classList[1];
    // console.log(color);
    selection(color);
    playSound(color);
    if(color === list[cntr]){
        if(cntr == (lvl - 1)){
            setTimeout(() => {
                levelUp();
            }, 500);
        } else{
            cntr++;
        }
    }else{
        gameOver();
    }
});

function changeTitle(level){
    if(level == 0){
        $("h1").text("Game Over, Press Any Key to Restart");
    } else {
        $("h1").text("Level " + level);
    }
}

function randomColor(){
    var numb = Math.floor(Math.random()*4)+1;
    switch (numb) {
        case 1:
            return "green";
            break;
        
        case 2:
            return "red";
            break;

        case 3:
            return "yellow";
            break;
    
        case 4:
            return "blue";
        default:
            break;
    }
}

function selection(color){

    $("."+color).addClass("pressed");
    setTimeout(function() {
        $("."+ color).removeClass("pressed")
    }, 100);
};


function playSound(keyStroke){
    switch (keyStroke) {
        case "green":
            var green = new Audio('./sounds/green.mp3');
            green.play();
            
            break;
        case "red":
            var red = new Audio('./sounds/red.mp3');
            red.play();
            
            break; 
        case "yellow":
            var yellow = new Audio('./sounds/yellow.mp3');
            yellow.play();
            
            break;
            
        case "blue":
            var blue = new Audio('./sounds/blue.mp3');
            blue.play();
            
            break;
    
        default:
            break;
    }

}

function gameOver(){
    changeTitle(0);
    var wrong = new Audio('./sounds/wrong.mp3');
    $("body").addClass("game-over");
    wrong.play();
    setTimeout(function() {
        $("body").removeClass("game-over")
    }, 100);
    lvl = 0;

}

function levelUp(){
    selection(list[lvl]);
    changeTitle(++lvl);
    cntr = 0;

}