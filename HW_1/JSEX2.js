class Duck {
    name;
    color;
    age;
    weight;
    img;
    constructor(name, color, age, weight, img) {
        this.name = name;
        this.color = color;
        this.age = age;
        this.weight = weight;
        this.img = img;

    }

    Show() {
        const duckImg = document.createElement("img");
        duckImg.src = this.img;
        let str = "<p>";
        str += "duck name:" + this.name + "<br />";
        str += "duck color:" + this.color + " <br />";
        str += "duck age:" + this.age + " <br />";
        str += "duck weight:" + this.weight + " <br />";
        str += "duck picture:" + duckImg.outerHTML + " <br />";
        str += "</p>";
        return str;
    }

    Quack() {
        let audioFile = "DuckSound.mp3";
        let quakStr = "";
        let QuakTime = (this.age * this.weight) / 2;
        for (var i = 0; i < QuakTime; i++) {
            quakStr += "Quak" + " ";
        }
        function playAudioWithDelay(count) {
            if (count < 3) {
                const audio = new Audio(audioFile);
                audio.play();
                setTimeout(function () {
                    playAudioWithDelay(count + 1);
                }, 1000); // Delay equal to the duration of the audio in seconds
            }
        }

        playAudioWithDelay(0);
        return quakStr;


    }
}