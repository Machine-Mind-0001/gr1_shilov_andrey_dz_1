let points = {
  "Вася": 200,
  "Петя": 300,
  "Даша": 250,
  "Андрей": 150,
  "Сергей": 450,
};
let points_sum = null;
const zero_key = "Вася";
let min = points[zero_key];
let max = min;

for(let key in points){
  points_sum += points[key];
}

  for (let key in points) {
      if(points[key] > max) max = points[key];
      if(points[key] < min) min = points[key];
  }

alert("Сумма > "+points_sum+" минимальное значение > "+min+" максимальное значение > "+max);