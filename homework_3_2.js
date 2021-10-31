let number1 = +prompt("Введите первое число");
let number2 = +prompt("Введите второе число");
let multiple_six_count = null;
let multiple_six_sum = null;
let temp = null;

if (number1 > number2) {
    temp = number1;
    number1 = number2;
    number2 = temp;
}

while (number2 >= number1) {
    if (number1%6 == 0) {
        multiple_six_count++;
        multiple_six_sum+=multiple_six_count;
    }
    number1++;
}
alert("Результат = "+"\""+multiple_six_count+"\" "+"\""+multiple_six_sum+"\"");