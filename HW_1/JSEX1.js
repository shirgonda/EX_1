class Counter {
    counter;
    Initialize(value) {
        this.counter = value;
    }
    Increment() {
        this.counter++;
    }
    Go() {
        let str;
        str="<p>";
        for (var i = 0; i <= this.counter; i++) {
            str+= i + " ";
        }
        str += "</p>";
        return str;
    }
}