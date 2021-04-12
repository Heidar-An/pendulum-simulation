let angle;
let straight = 200;
let endPoint;
let g = 2;
let angleV = 0;
let angleA = 0;

function setup() {
  createCanvas(400, 400);
  endPoint = createVector();
  angle = PI / 4;
}

function draw() {
  background(220);
  let lengthC = cos(angle) * straight;
  let lengthS = sin(angle) * straight;
  endPoint.x = lengthS + 200;
  endPoint.y = lengthC;
  angleA = (-g/straight) * sin(angle);
  angleV += angleA
  angle += angleV;
  //this part is optional, some damping if you want it.
  angleV *= 0.999;
  strokeWeight(4)
  line(200, 0, endPoint.x, endPoint.y)
  circle(endPoint.x, endPoint.y, 64)
}
