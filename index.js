for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    makeSound(this.innerHTML);
    addAnimation(this.innerHTML);
  });
}

document.addEventListener("keydown",function(event) {
    makeSound(event.key.toUpperCase());
    addAnimation(event.key);
})

function makeSound(key) {
    var sound;
    switch (key) {
      case "W":
        sound = "sounds/tom-1.mp3";
        break;
      case "A":
        sound = "sounds/tom-2.mp3";
        break;
      case "S":
        sound = "sounds/tom-3.mp3";
        break;
      case "D":
        sound = "sounds/tom-4.mp3";
        break;
      case "J":
        sound = "sounds/snare.mp3";
        break;
      case "K":
        sound = "sounds/crash.mp3";
        break;
      case "L":
        sound = "sounds/kick-bass.mp3";
        break;
      default:
        console.log(this.innerHTML);
    }
    new Audio(sound).play();
}

function addAnimation(key) {
    document.querySelector("."+key.toLowerCase()).classList.add("pressed");
    setTimeout(function() {
        document.querySelector("."+key.toLowerCase()).classList.remove("pressed");
    },100);
}
