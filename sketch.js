let splatterRadius = 4
let img
let radiusMax

function preload() {
  img = loadImage("assets/quiche.jpg")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(30)
  textStyle(BOLD)
  text("smudge me", width / 2 - 50, height / 2)
  image(img, 0, 0, width, height)
}

function draw() {
  // background(220);
  if (movedX < 1 && movedY < 1){
    radiusMax++
    splatterRadius++
  } else {
    radiusMax = 0
    splatterRadius = 4
  }

  if (mouseIsPressed) {
    let randX = random(mouseX - splatterRadius, mouseX + splatterRadius)
    let randY = random(mouseY - splatterRadius, mouseY + splatterRadius)
    let destX = random(mouseX - splatterRadius, mouseX + splatterRadius)
    let destY = random(mouseY - splatterRadius, mouseY + splatterRadius)
    let c = get(randX, randY)
    // c = 0
    fill(c)
    noStroke()
    push()
    translate(destX, destY)
    beginShape()
    let randRadius
    randRadius = random(2, radiusMax)
    vertex(cos(TWO_PI / 3) * randRadius, sin(TWO_PI / 3) * randRadius)
    randRadius = random(2, radiusMax)
    vertex(cos(TWO_PI / 3 * 2) * randRadius, sin(TWO_PI / 3 * 2) * randRadius)
    randRadius = random(2, radiusMax)
    vertex(cos(TWO_PI) * randRadius, sin(TWO_PI) * randRadius)
    endShape(CLOSE)
    pop()
  }
}

function mousePressed() {
  radiusMax = 2
}
