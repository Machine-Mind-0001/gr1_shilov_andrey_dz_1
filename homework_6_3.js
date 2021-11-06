function get_day(date) {
    if (!date instanceof Date) {
        console.error("Аргумент не являеться обектом класа Date");
        return null;
    }
    let week_days = ["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"];
    const day = date.getDay();
    return week_days[day];
}
alert( get_day(new Date(2021,10,5)));