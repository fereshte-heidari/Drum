

// var alphabet = [ "w","a","s","d","j","k","l"];
// var clickSelector="";
// for(i=0;i< alphabet.length;i++) {
//      clickSelector= "button."+ alphabet[i];
//      document.querySelector(clickSelector).addEventListener("click",function () {
//        alert("I got clicked!");
//      });
// }



//detecting button press
for(i=0;i<document.querySelectorAll(".drum").length;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function (){

makeSound(this.innerHTML);
flash(this.innerHTML);
  }
)
}

//detecting key press
document.addEventListener("keypress",function(event){
makeSound(event.key);
flash(event.key);
})

function makeSound(key){
  switch(key){
    case "w":
    var crash= new Audio("sounds/crash.mp3");
    crash.play();
    break;
    case "a":
    var kick= new Audio("sounds/kick-bass.mp3");
    kick.play();
    break;
    case "s":
    var snare= new Audio("sounds/snare.mp3");
    snare.play();
    break;
    case "d":
    var tom1= new Audio("sounds/tom-1.mp3");
    tom1.play();
    break;
    case "j":
    var tom2= new Audio("sounds/tom-2.mp3");
    tom2.play();
    break;
    case "k":
    var tom3= new Audio("sounds/tom-3.mp3");
    tom3.play();
    break;
    case "l":
    var tom4= new Audio("sounds/tom-4.mp3");
    tom4.play();
    break;
  default:
  console.log(key);

  }
}
function flash(keyPressed){
  document.querySelector("." + keyPressed).classList.add("pressed");
setTimeout(function(){
  document.querySelector("."+ keyPressed).classList.remove("pressed");
},150);
}
