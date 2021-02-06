

var noOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < noOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}

function handleClick() {

  var buttonName = this.innerHTML;  // this keyword refers to the identity of the button triggered by the event type click
  soundMaker(buttonName);
  buttonAnimation(buttonName);

}

document.addEventListener("keydown", handlePress);

function handlePress(pressed) {

  soundMaker(pressed.key);   // [.key] Returns the key value of the key represented by the event
  buttonAnimation(pressed.key);

}

function soundMaker(character) {

    switch (character) {
      case "w":
        var tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();
        break;

      case "a":
        var tom2 = new Audio('sounds/tom-2.mp3');
        tom2.play();
        break;

      case "s":
        var tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
        break;

      case "d":
        var tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();
        break;

      case "j":
        var snare = new Audio('sounds/snare.mp3');
        snare.play();
        break;

      case "k":
        var crash = new Audio('sounds/crash.mp3');
        crash.play();
        break;

      case "l":
        var kick = new Audio('sounds/kick-bass.mp3');
        kick.play();
        break;

      default: console.log(character);

    }

}

function buttonAnimation (activeKey) {

    var buttonUsed = document.querySelector("." + activeKey);
    buttonUsed.classList.add("pressed");

    setTimeout (function() {
      buttonUsed.classList.remove("pressed");
    }, 100);                                    // 100 millisecond = 0.1 second

}
