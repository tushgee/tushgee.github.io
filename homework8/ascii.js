"use strict";
let timer = null;
let frameIndex = 0;
let frames;





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
  }
}

function changeSize() {
  document.getElementById("myTxtStage").style.fontSize = document.getElementById("sizeId").value;
}


function turbo() {

  if (document.getElementById("chbTurbo").checked== true) {
    if (timer) {
      clearInterval(timer);
      
    } 
    timer = setInterval(setAnimation, 50);
  } else {
    if (timer) {
      clearInterval(timer);
      
    } 
    timer = setInterval(setAnimation, 250);

  };


}


window.onload = function() {
  document.getElementById('btnStart').onclick = animate;
  document.getElementById('btnStop').onclick = stop;
  document.getElementById('chbTurbo').onclick = turbo;
}


