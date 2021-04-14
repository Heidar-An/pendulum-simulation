let angle;
let straight = 200;
let endPoint;
let g = 2;
let angleV = 0;
let angleA = 0;
let points = []
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
  trace(endPoint.x, endPoint.y)
  strokeWeight(4)
  line(200, 0, endPoint.x, endPoint.y)
  circle(endPoint.x, endPoint.y, 64)
  
}
//trace line for the pendulum
function trace(xCor, yCor){
  strokeWeight(2);
  points.push([xCor, yCor])
  for(let i = 0;i < points.length - 1; i++){
    line(points[i][0], points[i][1], points[i + 1][0], points[i + 1][1])
  }
}
