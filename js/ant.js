class Ant {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.direction = 0;
    }

    turn_left() {
        (this.direction == 0)
            ? this.direction = 3
            : --this.direction;
    }

    turn_right() {
        (this.direction == 3)
            ? this.direction = 0
            : ++this.direction;
    }

    move(arr) {
        if (this.direction == 0) {
            --this.y;
            if (this.y == -1) this.y = arr.length-1;
        } else if (this.direction == 1) {
            ++this.x;
            if (this.x == arr.length) this.x = 0;
        } else if (this.direction == 2) {
            ++this.y;
            if (this.y == arr.length) this.y = 0;
        } else if (this.direction == 3) {
            --this.x;
            if (this.x == -1) this.x = arr.length-1;
        }
        if (arr[this.y][this.x] == 1) arr[this.y][this.x] = 0; 
        else if (arr[this.y][this.x] == 0) arr[this.y][this.x] = 1; 
    }
}