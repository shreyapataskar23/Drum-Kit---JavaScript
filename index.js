//This is a comment
var numberOfButtons=document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfButtons; i++ )
{
document.querySelectorAll(".drum")[i].addEventListener("click", function (){
var buttonInnerHTML = this.innerHTML;
makeSound(buttonInnerHTML);
buttonAnimation(event.key);

switch(buttonInnerHTML)
{
  case "w":
  var audio1 = new Audio("sounds/tom-1.mp3");
  audio1.play();
  break;

  case "a":
  var audio2 = new Audio("sounds/tom-2.mp3");
    audio2.play();
  break;

  case "s":
  var audio3 = new Audio("sounds/tom-3.mp3");
    audio3.play();
  break;

  case "d":
  var audio4 = new Audio("sounds/tom-4.mp3");
    audio4.play();
  break;

  case "j":
  var audio5 = new Audio("sounds/crash.mp3");
    audio5.play();
  break;

  case "k":
  var audio6 = new Audio("sounds/kick-bass.mp3");
    audio6.play();
  break;

  case "l":
  var audio7 = new Audio("sounds/snare.mp3");
    audio7.play();
  break;

  default: alert("Can't play!");
}

});
}

//detecting keyboard press
//this event listener will call our function after the user presses the respective key
document.addEventListener("keypress", function(event){
makeSound(event.key);
buttonAnimation(event.key);
});

function makeSound(key)
{
  switch(key)
  {
    case "w":
    var tom1=new Audio ("sounds/tom-1.mp3");
    tom1.play();
    break;

    case "a":
    var tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play();
    break;

    case "s":
    var tom3 = new Audio("sounds/tom-3.mp3");
    tom3.play();
    break;

    case "d":
    var tom4 = new Audio("sounds/tom-4.mp3");
    tom4.play();
    break;

    case "j":
    var audio5 = new Audio("sounds/crash.mp3");
      audio5.play();
    break;

    case "k":
    var audio6 = new Audio("sounds/kick-bass.mp3");
      audio6.play();
    break;

    case "l":
    var audio7 = new Audio("sounds/snare.mp3");
      audio7.play();
    break;

    default: alert("Can't play!");
  }
}

//animations for our buttons
function buttonAnimation(currentKey)
{
var activeButton = document.querySelector("."+currentKey);
activeButton.classList.add("pressed");
setTimeout(function(){
  activeButton.classList.remove("pressed");
}, 100);
}
