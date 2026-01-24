let row, col, cellSize;
let x_off = 0,
    y_off = 0,
    z_off = 0,
    increment = 0.04;

function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);

    let baseSize = min(windowWidth, windowHeight);
    cellSize = baseSize * 0.05;
    row = ceil(height / cellSize);
    col = ceil(width / cellSize);

    background(0, 220);
}

function draw() {
    y_off = 0;
    for (let i = 0; i < row; i++) {
        x_off = 0;
        for (let j = 0; j < col; j++) {
            let x = j * cellSize;
            let y = i * cellSize;

            let r = map(noise(x_off + 10, y_off, z_off), 0, 1, 0, 255);
            let g = map(noise(x_off, y_off + 20, z_off), 0, 1, 0, 255);
            let b = map(noise(x_off, y_off, z_off + 30), 0, 1, 0, 255);
            let c = color(r, g, b, 80);

            fill(c);
            square(x, y, cellSize);

            x_off += increment;
        }
        y_off += increment;
        z_off += 0.0003;
    }
}