"use strict";
let timer = null;
let frameIndex = 0;
let frames;


//Tiny (7pt), Small (10pt), Medium (12pt), Larg e (16pt), Extra Large (24pt), XXL (32pt)



function setAnimation() {
    const animation = document.getElementById("animationId").value;
    if (animation.toUpperCase()!="BLANK"){
      //  document.getElementById("myTxtStage").value = animation.toUpperCase();
        document.getElementById("myTxtStage").value = ANIMATIONS[animation];
        frames = ANIMATIONS[animation].split("=====\n");
        document.getElementById("myTxtStage").value = frames[frameIndex];
        if (frameIndex<frames.length-1) 
          frameIndex++
        else frameIndex = 0;

    }
}

function animate() {
	if (timer === null) {
		timer = setInterval(setAnimation, 250);
	} 
      
}

function stop() {
	if (timer) {
    clearInterval(timer);
    timer = null;
    //document.getElementById("myTxtStage").value = "";
  }
}

window.onload = function() {
  document.getElementById('btnStart').onclick = animate;
  document.getElementById('btnStop').onclick = stop;
}


