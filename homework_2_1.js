let w_way = +prompt("Введите путь автомобиля (километры)",0); //Авто конвертация в number посредством "+" перед prompt (+prompt...) 
let w_diam = +prompt("Введите диаметр колеса (дюймы)",0);
let rpm_count = null;

function to_meter(kmeter) {
    if (isNaN(kmeter)) {
        console.error("Аргумент не являеться числом"+" \""+kmeter+"\""); 
        return null;
    }
    return kmeter*1000;
}

function to_meter_diam(inch) {
    if (isNaN(inch)) {
        console.error("Аргумент не являеться числом"+" \""+inch+"\""); 
        return null;
    }
    return inch/0.0254;
}

function rev_count(way,diam){
    if (isNaN(way)) {
        console.error("Путь не являеться числом"+" \""+way+"\""); 
        return null;
    }
    if (isNaN(diam)) {
        console.error("Диаметр не являеться числом"+" \""+diam+"\"");
        return null;
    }
    if (way<=0) {
        console.error("Путь отрицательный или равен нулю"+" \""+way+"\"");
        return null;
    }
    if (diam<=0) {
        console.error("Диаметр отрицательный или равен нулю"+" \""+diam+"\"");
        return null;
    }else return way/(diam*Math.PI);
}

w_way = to_meter(w_way);
w_diam = to_meter_diam(w_diam);
rpm_count = rev_count(w_way,w_diam);

if (rpm_count != null) {
    alert("Одно колесо совершило "+rpm_count+" оборотов");
    alert("Четыре колеса совершили "+(rpm_count*4)+" оборотов");
}else alert("В программе возникла ошибка, смотри консоль отладки для справки");