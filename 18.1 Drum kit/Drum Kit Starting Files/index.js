var drumLength = document.querySelectorAll(".drum").length;


for ( var i =0; i < drumLength;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        //  alert("I got clicked");
        // var tomDrum = new Audio('./sounds/tom-1.mp3');
        // tomDrum.play();
        // console.log(this.innerHTML);
        // this.style.color ="green";
        var buttonKey = this.innerHTML;
        playSound(buttonKey);
        buttonAnimation(buttonKey);
    });

}

document.addEventListener("keydown",function(event){
    console.log(event);
    playSound(event.key);
    buttonAnimation(event.key);
})

function playSound(keyStroke){
    switch (keyStroke) {
        case "w":
            var tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
            
            break;
        case "a":
            var tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
            
            break; 
        case "s":
            var tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
            
            break;
            
        case "d":
            var tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
            
            break;
            
        case "j":
            var crash = new Audio('./sounds/crash.mp3');
            crash.play();
            
            break;
            
        case "k":
            var kickBass = new Audio('./sounds/kick-bass.mp3');
            kickBass.play();
            
            break;
            
        case "l":
            var snare = new Audio('./sounds/snare.mp3');
            snare.play();
            
            break;
    
        default:
            break;
    }

}

function buttonAnimation(key){
    console.log("."+key);
    var activeButton = document.querySelector("."+ key);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);

}

