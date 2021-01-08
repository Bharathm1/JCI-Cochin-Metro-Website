var circle = document.getElementById("circle");

setTimeout(function () {
  console.log(circle);
  circle.style.webkitAnimationName = "move";
}, 5000)