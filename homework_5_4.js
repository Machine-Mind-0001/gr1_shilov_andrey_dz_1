let points = {
  "Вася": 200,
  "Петя": 300,
  "Даша": 250,
  "Андрей": 150,
  "Сергей": 450,
};
const ZERO_KEY = "Вася";

let points_sum = null;
let min = points[ZERO_KEY];
let max = min;
let name_max = null;
let name_min = null;

for(let key in points){
  points_sum += points[key];
}

  for (let key in points){
      if(points[key] > max){
        max = points[key];
        name_max = key;
      }
      if(points[key] < min){
        min = points[key];
        name_min = key;
      }
  }
  
alert("Сумма > "+points_sum+", максимальная оценка > "+name_max+", минимальная оценка > "+name_min);