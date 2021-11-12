let div = document.createElement('div');
div.className = "div1";
div.style.background = "red";
div.style.width = "192px";
div.style.height = "128px";
div.addEventListener('mouseover',log_div_size1);
div.addEventListener('click',show_div_color1);
document.body.append(div);

let div2 = document.createElement('div');
div2.className = "div2";
div2.style.background = "green";
div2.style.width = "256px";
div2.style.height = "192px";
div2.addEventListener('mouseover',log_div_size2);
div2.addEventListener('click',show_div_color2);
document.body.append(div2);

function log_div_size1() {
  console.log(div.style.width);
  console.log(div.style.height);
}
function log_div_size2() {
  console.log(div2.style.width);
  console.log(div2.style.height);
}

function show_div_color1() {
  alert('Красный');
};

function show_div_color2() {
  alert('Зеленый');
};