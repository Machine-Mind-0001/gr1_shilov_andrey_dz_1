function get_count_work_days(date1,date2) {
    if (!date1 instanceof Date || !date2 instanceof Date) {
        console.error("Один из аргументов не являеться обектом класа Date");
        return null;
    }
    const MS_DAY = 86400000;
    let day_difference = Math.ceil((Math.abs(date1 - date2)+MS_DAY)/MS_DAY);
    let day_cyclic_conter = date1.getDay();
    let count_work_days = 0;
    while (day_difference > 0) {
        if (day_cyclic_conter == 6){
            day_cyclic_conter = 1;
            day_difference-=2;
            continue;
        }
        day_difference--;
        day_cyclic_conter++;
        count_work_days++;
    }
    return count_work_days;
}
alert(get_count_work_days(new Date(2021,0,1),new Date(2021,11,31)));