var slider=document.getElementById("slider");
function setup() {
  var c = createCanvas(400, 400);
  c.parent("canvasWrapper");
}

function draw() {
  noStroke();
  background("#ff9fff");
  fill("#f84223");
  ellipse(width/2, height/2, slider.value, slider.value);
}
