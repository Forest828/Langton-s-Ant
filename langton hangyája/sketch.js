const stepSize = 10;
let ways = [];
const left = 0, right = 1;
let UP = 0, RIGHT = 1, DOWN = 2, LEFT = 3;
let currentWay;
let tiles = [];
let ant;

const turn = (way) => {
    let num = ways.indexOf(currentWay);
    (way) ? num++ : num--;

    if (num < 0) {
        num = 3;
    } else if (num > 3) {
        num = 0;
    }

    return num;
}

const createGrid = () => {
    for (let i = 0; i < width / stepSize; i++) {
        for (let j = 0; j < height / stepSize; j++) {
            tiles.push(1);
        }
    }
}

const drawBackground = () => {
    let index = 0;
    for (let i = 0; i < 50; i++) {
        for (let j = 0; j < 50; j++) {
            (tiles[index]) ? fill(255) : fill(0);
            if (index == ant) fill(255, 0, 0);
            index++;
            rect(j * stepSize, i * stepSize, stepSize, stepSize);
        }
    }
}

const antMovement = () => {
    currentWay = (tiles[ant]) ? ways[turn(right)] : ways[turn(left)];
    tiles[ant] = (tiles[ant]) ? 0 : 1;
    if (ant < width / stepSize + 1 && currentWay == ways[UP] ) {
        ant = tiles.length - ant + height / stepSize;
    } else if (ant > tiles.length - width / stepSize - 1  && currentWay == ways[DOWN]) {
        ant = tiles.length - ant - height / stepSize;
    } 
    ant += currentWay;

}

const getRandWay = () => {
    let num = Math.floor(Math.random() * 4);
    if (num == 1) {
        return UP;
    } if (num == 2) {
        return RIGHT;
    } if (num == 3) {
        return DOWN;
    } if (num == 4) {
        return LEFT;
    }
}

function setup() {
    createCanvas(500, 500);
    createGrid();
    ways = [- width / stepSize, 1, width / stepSize, -1];
    ant = (width / stepSize) * (height / stepSize) / 2 + 25;
    currentWay = ways[getRandWay()];
    //frameRate(5);
}

function draw() {
    antMovement();
    drawBackground();
}
