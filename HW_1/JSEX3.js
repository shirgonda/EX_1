class Clock {
    country;
    hour;
    minute;
    second;

    constructor(hour, minute, second,country) {
        this.country = country;
        this.hour = hour;
        this.minute = minute;
        this.second = second;
    }
    ConverToSecond() {
        let converHour = this.hour * 3600;
        let converMin = this.minute * 60;
        let TotalSec = Number(converHour) + Number(converMin) + Number(this.second);
        return TotalSec;
    }
    Show() {
        let str = "";
        str += this.checkNumOfDig(this.hour) + ":";
        str += this.checkNumOfDig(this.minute) + ":";
        str += this.checkNumOfDig(this.second);
        return str;
    }
    checkNumOfDig(num) {
        if (num.toString() > 1) {
            return num;
        }
        else {
            return "0" + num;
        }
    }
}