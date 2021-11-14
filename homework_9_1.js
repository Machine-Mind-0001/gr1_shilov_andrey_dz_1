$(document).ready(function() {
    const COUNT = 1000;
    let delay_ms = 2000;
    setTimeout(() => {
        for (let i = 0; i < COUNT; i++) {
            let square = $("<div></div>")
            $("body").append(square);
        }
            $("div").each((i,element) => {
                $(element).addClass("square"+i)
                .css("background-color", "skyblue")
                .css("width","70px")
                .css("height","70px")
                .css("display","inline-block")
                .attr('id',i+1);
            });
        setTimeout(()=> {
              $("div").css("background-color", "purple")
              .css("width","100px")
              .css("height","100px");
            setTimeout(() => {
                    $("div").each((i,element) => {
                        $(element).text(i+1);
                    });
                setTimeout(() => {
                    for (let i = 1; i <= COUNT; i++) {
                        if(i%3 == 0) $("#"+i).css("background-color", "red");
                        if(i%15 == 0){
                            $("#"+i).css("background", "transparent")
                            .css("width","0px")
                            .css("height","0px")
                            .css("border-left","50px solid transparent")
                            .css("border-right","50px solid transparent")
                            .css("border-bottom","100px solid #C3B091")
                        } 
                    }
                    setTimeout(() => {
                        for (let i = 1; i <= COUNT; i++) {
                            if(i%3 == 0) {
                                if(i%15 != 0) $("#"+i).remove();
                            }
                        }
                    },delay_ms)
                },delay_ms)
            },delay_ms)
        },delay_ms)
    },delay_ms)
  });