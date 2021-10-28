let day = prompt("Введите колиество дней","0");

function day_switch(day) {
    if (isNaN(day)) {
        console.error("Аргумент не являеться числом"+" \""+day+"\""); 
        return null;
    }
    if (day<0) {
        console.error("Количество дней отрицательно"+" \""+day+"\"");
        return null;
    }
    if (day.length >= 2) {
        let last_digit = day.charAt(day.length-1);
        let penultimate_digit = day.charAt(day.length-2);
        if (penultimate_digit == last_digit) {
            return day+" дней";
        } else{
            switch (day.charAt(day.length-1)) {
                case "1": return day+" день";
                case "2":
                case "3":
                case "4": return day+" дня";
                case "5":
                case "6":
                case "7":
                case "8":
                case "9":
                case "0": return day+" дней";
                default:
                    break;
            }
        }
    } else{
        switch (day.charAt(day.length-1)) {
            case "1": return day+" день";
            case "2":
            case "3":
            case "4": return day+" дня";
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
            case "0": return day+" дней";
            default:
                break;
        }
    }
}

day = day_switch(day);

if (day != null) alert("Вам осталось жить "+day);
else alert("В программе возникла ошибка, смотри консоль отладки для справки");