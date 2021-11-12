let div = document.createElement('div');
div.className = "div1";
div.style.background = "red";
div.style.width = "192px";
div.style.height = "128px";
div.addEventListener('mouseover',() => {
  console.log(div.style.width);
  console.log(div.style.height);
});
div.addEventListener('click',() => {
  alert('Красный');
});
document.body.append(div);

let div2 = document.createElement('div');
div2.className = "div2";
div2.style.background = "green";
div2.style.width = "256px";
div2.style.height = "192px";
div2.addEventListener('mouseover',() => {
  console.log(div2.style.width);
  console.log(div2.style.height);
});
div2.addEventListener('click',() => {
  alert('Зеленый');
});
document.body.append(div2);
