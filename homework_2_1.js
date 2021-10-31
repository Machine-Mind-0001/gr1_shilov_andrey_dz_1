const kmeter_to_meter = 1000;
const inch_to_meter = 0.0254;
let wheel_way = +prompt("Введите путь автомобиля (километры)");
let wheel_diam = +prompt("Введите диаметр колеса (дюймы)");
let rev_count = null;

if (isNaN(wheel_way) || isNaN(wheel_diam)) {
    console.error("Путь или диаметр не являеться числом"+" \""+wheel_way+"\""+" \""+wheel_diam+"\""); 
}

wheel_way *= kmeter_to_meter;
wheel_diam *= inch_to_meter;

rev_count = wheel_way/(wheel_diam*Math.PI);

alert("Одно колесо совершило "+rev_count+" оборотов "+"Четыре колеса совершили "+(rev_count)*4+" оборотов");
