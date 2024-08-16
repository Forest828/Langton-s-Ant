let squareSize;
let matrixSize;
let matrix;
let ant; 
let step;

function setup() {
    squareSize = 5;
    matrixSize = 100;
    matrix = [];
    step = 0;
    ant = new Ant(Math.floor(matrixSize / 2), Math.floor(matrixSize / 2));

    createCanvas(matrixSize * squareSize, matrixSize * squareSize);
    noStroke();
    // frameRate(1);

    for (let i = 0; i < matrixSize; i++) {
        let array = new Array(matrixSize);
        for (let j = 0; j < array.length; j++) {
            array[j] = 0;
        }
        matrix.push(array);
    }
}

function draw() {
    background(255);
    (matrix[ant.y][ant.x] == 1) 
        ? ant.turn_right()
        : ant.turn_left();
    
    ant.move(matrix);

    for (let i = 0; i < matrixSize; i++) {
        for (let j = 0; j < matrixSize; j++) {
            if (matrix[i][j] == 1 || i == ant.y && j == ant.x) {
                if (matrix[i][j] == 1) fill(0);
                if (i == ant.y && j == ant.x) fill(255, 0, 0);
                rect(j*squareSize, i*squareSize, squareSize, squareSize);
            }
        }
    } 
    ++step;
    console.log(step)
}
