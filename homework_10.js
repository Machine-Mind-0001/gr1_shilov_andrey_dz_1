$(document).ready(function() {
    fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => {
      return response.json();
    })
  .then((json) => {
    add_user_viev(json);
  });
  function add_user_viev(json) {
      let user_desc = [];
      let user_data = [];
      for (i = 0; i < json.length;i++){
          let li = $("<li>").attr({"id":i})
          let div = $("<div>").addClass("user_block");
          user_desc.push("id:"+json[i].id+" "+json[i].title);
          user_data.push(json[i].body);
          $("ul").append(li);
          $("#"+i).append(div);
      }

      let div = $("<div>").addClass("image_and_text");

      $(".user_block").append(div);

      div = $("<div>").addClass("image");

      $(".image_and_text").append(div);

      div = $("<div>").addClass("text");

      $(".image_and_text").append(div);

      $(".image").each((i,element) => {
            let img = $("<img>").attr({"src":"./matrix_code.jpg"});
            $(element).append(img);
        });
        
        $(".text").each((i,element) => {
            $(element).text(user_desc[i]);
        });

        div = $("<div>").addClass("button_div");

        $(".user_block").append(div);
        let button1 = $("<button>").text("Подробнее").addClass("show_info");
        let button2 = $("<button>").text("Удалить").addClass("delete");
        $(".button_div").append(button1).append(button2);

        $(".show_info").each((i,element) => {
            $(element).on("click", function() {
                alert(user_data[i]);
            });
        });
        $(".delete").each((i,element) => {
            $(element).on("click", function() {
                $("#"+i).remove();
            });
        });
    }
});