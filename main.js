var blueCar = document.getElementById("bluecar");
var raceCar = document.getElementById("racecar");

//bluecar move
blueCar.addEventListener("animationiteration", function () {
  var random = ((Math.floor(mMth.random() * 3)) * 130)
  blueCar.style.left = random + "px";
});

//racecar move 
window.addEventListener("keydown", function (e) {
  if (e.keycode == "39") {
    var raceCarLeft = parseInt(window.getComputedStyle(raceCar).getPropertyValue("left"));

    if (raceCarLeft < 260) { raceCar.style.left = (raceCarLeft + 130) + "px"; }
  }
  
  if (e.keycode == "37") {
    var raceCarLeft = parseInt(window.getComputedStyle(raceCar).getPropertyValue("left"));

    if (raceCarLeft > 0) { raceCar.style.left = (raceCarLeft - 130) + "px"; }
  }
});

    // var random = ((Math.random() * 3))  * 130)

   //if (e.keycode == "39") { var raceCarleft = parseInt(window.getComputedStyle(raceCar).getPropertyValue("left")}
//{ raceCar.style.left = (raceCarleft + 130) + "px" }
//{
  //  var raceCarleft = parseInt(window.getComputedStyle(raceCar).getPropertyValue("left")
    //    raceCar.style.left = (raceCar + 130) + "px"}

