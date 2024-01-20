class point {
    x;
    y;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    show() {
        let str = "";
        str+= "(" + this.x + ", " + this.y + ")" ;
        return str;
    }
    Equals(p) {
        if (p.x == this.x && p.y == this.y) {
            return true;
        }
        else {
            return false;
        }
    }
}