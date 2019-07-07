$(function(){
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
                 "backgroundImage": 'url("background.jpg")', 
                 "backgroundPosition": -x + 'px ' + (-y) + 'px' })
            .addClass("puzzlepiece");

        // store x and y for later
        div.x = x;
        div.y = y; 
    }    

});

