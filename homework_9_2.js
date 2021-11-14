$(document).ready(function() {
    let square1 = $("<div></div>")
    $("body").append(square1);
    let square2 = $("<div></div>")
    $("body").append(square2);
    $("div").each((i,element) => {
        $(element).attr('id',i+1);
    });
    $("#1").css("background-color", "red")
    .css("width","64px")
    .css("height","128px")
    .css("display","inline-block")
    .attr("color","Красный");
    $("#2").css("background-color", "green")
    .css("width","96px")
    .css("height","192px")
    .css("display","inline-block")
    .attr("color","Зелёный");
    $("#1").on("click", function() {
        alert($("#1").attr("color"));
      });
    $("#2").on("click", function() {
        alert($("#2").attr("color"));
    });
    $("#1").on("mouseover", function() {
        console.log($("#1").width()+"px x "+$("#1").height()+"px");
      });
    $("#2").on("mouseover", function() {
        console.log($("#2").width()+"px x "+$("#2").height()+"px");
    });
});