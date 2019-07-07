$(function(){
    let started = 0;
    $(".boundary").mouseover(function(event){
        if (started){
            $(".boundary").addClass("youlose");
            $("#status").text("You lose :(");
            started = 0;
        }
      
    })

    $("#maze").mouseover(function(event){
        event.stopPropagation();
    })

    $("body, h1, h2, p").mouseover(function(event){
        $(".boundary").mouseover();
    })

    $("#start").click(function(){
        $(".boundary").removeClass("youlose");
        started = 1;
        
    })


    $("#end").mouseover(function(){
        if (started){
            $("#status").text("You win :)");
            started = 0;
        }
       
    })


   
});