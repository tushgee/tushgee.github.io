$(function(){
    "use strict";
    var puzzleArea = $('#puzzlearea');
    var divs = $("#puzzlearea div");
    console.log(divs);
      
    // initialize each piece
    for (var i=0; i< divs.length; i++) {
        var div = $(divs[i]);
        
        // calculate x and y for this piece
        var x = ((i % 4) * 100) ;
        var y = (Math.floor(i / 4) * 100) ;

        // set basic style and background
        div.css({"left": x + 'px', 
                 "top": y + 'px', 
                 "backgroundPosition": -x + 'px ' + (-y) + 'px' })
            .addClass("puzzlepiece");
        
        div.attr("id","square_" + i % 4 + "_" + Math.floor(i / 4) );   
  

        // store x and y for later
        div.x = x;
        div.y = y; 
        divs[i].x = x;
        divs[i].y = y;


        clickHandler("#square_" + i % 4 + "_" + Math.floor(i / 4), div.x+ ":" + div.y);

        function clickHandler(id, txt){
            $(id).click(function(){
                $("h1").text(txt);
            });
        }

    }    
    function swapPiece(e1, e2){

        var txt = $(divs[e1]).text();
        var x = divs[e1].left;
        var y = divs[e1].top;
     
       // alert($(divs[e2]).css("left") + ":" + $(divs[e2]).css("top") + " ; " + divs[e2].x + ":" + divs[e2].y)

        $(divs[e1]).text($(divs[e2]).text());

        // set basic style and background
        $(divs[e1]).css({"border": '5px solid green',
                                    "left": $(divs[e2]).left + 'px', 
                                    "top": $(divs[e2]).top + 'px', 
                                    "backgroundPosition": -divs[e2].x + 'px ' + (-divs[e2].y) + 'px' });

        
        $(divs[e2]).text(txt);

        $(divs[e2]).css({"border": '5px solid blue',
                                    "left": x + 'px', 
                                    "top": y + 'px', 
                                    "backgroundPosition": -divs[e1].x + 'px ' + (-divs[e1].y) + 'px' });
        




    }
    $("#shufflebutton").click(function () {
        swapPiece(0,3);
        alert("Yes, it is working!")
        swapPiece(3,0);
        
    });
  

});

