const MAX_COUNT_ATTEMPT = 7;
let min = 0;
let max = 100;
let attempt = 0;
let answer = null;
let number = null;

do {
    number = parseInt(min + (max - min)/2); 
    answer = confirm("Ваше число больше числа "+number+" ?");
    attempt++;
    answer ? min = number : max = number;
} while ((max - min) > 1 || attempt < MAX_COUNT_ATTEMPT);
alert("Результат "+max)