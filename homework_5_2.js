function get_random(array) {
    if(!Array.isArray(array)){
      console.error('Аргумент не является массивом!');
      return null;
    }
    let min = 0;
    let max = array.length;
    let random_element = Math.floor(Math.random() * (max - min)) + min;
    return array[random_element];
  }
  
let array = [5,10,55,65,64,90]

alert(get_random(array))