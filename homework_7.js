function Calculator(name){
    this.name = name;
    let history = [];
    let date = new Date();
    this.sum = function(...array) {
        let is_valid = true;
        let num_array = array.map(element => {
            let temp = +element;
            if (!isNaN(temp)) return element = temp;
            else {
                console.error("Argument is not a number"+" \""+element+"\"");
                is_valid = false;
                return null;
            }
        }); 
        if (!is_valid) return null;
        let sum_res = num_array.reduce((element_sum, a) => element_sum + a,0); 
        add_story_record("+",sum_res,null,array,this.name);
        return sum_res;
      };

    this.sub = function(arg1,arg2) {
        if (isNaN(arg1) || isNaN(arg2)) {
            console.error("One of the argements is not a number"+" \""+arg1+"\""+" \""+arg2+"\"");
            return null;
        }
        let res = arg1 - arg2;
        add_story_record("-",res,arg1,arg2,this.name);
        return res;
      };

    this.mult = function(arg1,...array) {
        let is_valid = true;
        let num_array = array.map(element => {
            let temp = +element;
            if (!isNaN(temp)) {
                return element = temp;
            }
            else {
                console.error("Argument is not a number"+" \""+element+"\"");
                is_valid = false;
                return null;
            }
        })
        if (!is_valid) return null;
        let mult_res = num_array.reduce((element_sum, a) => element_sum * a); 
        mult_res*=arg1;
        add_story_record("*",mult_res,null,array,this.name);
        return mult_res;
      };

    this.div = function(arg1,arg2) {
        if (isNaN(arg1) || isNaN(arg2)) {
            console.error("One of the argements is not a number"+" \""+arg1+"\""+" \""+arg2+"\"");
            return null;
        }
        let res = arg1 / arg2;
        add_story_record("/",res,arg1,arg2,this.name);
        return res;
      };
      function add_story_record(action,res,arg1,arg2,name) {
          let year = date.getFullYear();
          let month = date.getMonth();
          let day = date.getDate();
          let hour = date.getHours();
          let min = date.getMinutes();
          let action_str = null;
          let arg_str = null;
          switch (action) {
              case "+":{
                action_str = "сумма";
                break;
              }
            case "-":{
                action_str = "разность";
                break;
            }
            case "*":{
                action_str = "умножение";
                break;
            }
            case "/":{
                action_str = "деление";
                break;
            }
          }
        if (Array.isArray(arg2)) {
            arg2 = arg2.join(", ");
        }
        if (arg1 == null) arg_str = arg2;
        else arg_str = arg1+", "+arg2;
        history.push("\""+name+" "+"("+day+"."+month+"."+year+" "+hour+":"+min+")"+":"+action_str+" = "+
        res+", "+"("+arg_str+")"+"\"");
        return;
      };
      this.get_story_record = function() {
          if ( history.length > 0) {
            history.forEach(element => {
                console.log(element);
            });
          } else console.log("Empty");
          return;
      };
      this.clear_story_record = function() {
        history.splice(0,history.length);
        console.log("History cleared");
        return;
      };
}
let calc = new Calculator("calc");
let a = 1;
let b = 9;
console.log(calc.sum(a,"10",30,10));
console.log(calc.sub(a,b));
console.log(calc.mult(a,"a",1,5,10));
console.log(calc.div(a,b));
calc.get_story_record();
calc.clear_story_record();
calc.get_story_record();
