function get_count_days(date) {
    if (!date instanceof Date) {
        console.error("Аргумент не являеться обектом класа Date");
        return null;
    }
    const MS_DAY = 86400000;
    const NYD = new Date(2021,11,31);
    let current_date = new Date();
    let day_difference = null;
    if (date.getFullYear() == current_date.getFullYear() && date.getMonth() == current_date.getMonth() && 
    date.getDay() == current_date.getDay()) {
        day_difference = Math.ceil(((NYD - current_date)+MS_DAY)/MS_DAY);
    }
    else day_difference = Math.ceil(((NYD - date)+MS_DAY)/MS_DAY);
    return day_difference;
}
alert(get_count_days(new Date()));