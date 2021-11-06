function get_max(array){
    if(!Array.isArray(array)){
        console.error('Аргумент не является массивом!');
        return null;
    }
    let max = 0;
    for (let i = 0;i < array.length; i++) {
        if(array[i] > max) max = array[i];
    }
    return max;
  };
let array = [8,16,32,64,128,256,4096];

alert(get_max(array));