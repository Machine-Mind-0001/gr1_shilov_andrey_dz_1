const COUNT = 10;
let delay_ms = 3000;
setTimeout(() => {
  for (let i = 1; i <= COUNT; i++) {
    let div = document.createElement('div');
    div.className = "square"+i;
    div.style.background = "blue";
    div.style.width = "50px";
    div.style.height = "50px";
    document.body.append(div);
  }
  setTimeout(() => {
    let class_name = null;
    for (let i = 1; i <= COUNT; i++) {
      class_name = "square"+i;
      let div = document.body.getElementsByClassName(class_name);
      div[0].style.background = "green";
      div[0].style.width = "100px";
      div[0].style.height = "100px";
    }
    setInterval(() => {
      let class_name = null;
      for (let i = 1; i <= COUNT; i++) {
        class_name = "square"+i;
        let div = document.body.getElementsByClassName(class_name);
        if(i%3 == 0){
          div[0].style.background = "red";
        } else{
          div[0].style.background = "yellow";
        }
      }
      setTimeout(() => {
        let class_name = null;
        for (let i = 1; i <= COUNT; i++) {
          class_name = "square"+i;
          let div = document.body.getElementsByClassName(class_name);
          div[0].remove();
        }
        document.body.style.background = "#000000";
      },delay_ms);
    },delay_ms);
  },delay_ms);
},delay_ms);