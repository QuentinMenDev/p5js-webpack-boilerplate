export function preload() {

}

export function setup() {
  createCanvas(windowWidth, windowHeight)
  background(200)
}

export function draw() {
  ellipse(mouseX, mouseY, 20, 20)
}