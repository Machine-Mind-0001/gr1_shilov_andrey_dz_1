let str = "ноты акустика гитара";

function get_order(string) {
  if(!typeof(string) == String){
    console.error('Аргумент не является строкой!');
    return null;
  }
  const FIRST_CHARACTER = 0;
  let str_array = string.split(" ");
  let temp = null;
  for(let i=1; i < str_array.length; i++)
	  for(let j=i; j > 0 && str_array[j-1].charAt(FIRST_CHARACTER) > str_array[j].charAt(FIRST_CHARACTER); j--){
	    temp = str_array[j-1]
	    str_array[j-1] = str_array[j];
	    str_array[j] = temp;
	}
	return str_array.join(" ");
}

alert(get_order(str));