let day = +prompt("Введите количество дней",0);

if (isNaN(day)) console.error("Количество дней не являеться числом"+" \""+day+"\""); 

let mod10 = day%10;
let mod100 = day%100;

if (mod100 >= 10 && mod100<=20) {
    day = day + " дней";
} else {
    switch (mod10) {
        case 1: day = day + " день";break;
        case 2:
        case 3:
        case 4: day = day + " дня";break;
        default: day = day + " дней";break;
    }    
}
alert(day);