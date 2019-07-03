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
        if (frameIndex<frames.length-1) frameIndex++
        else frameIndex = 0;

    }
}

function animate() {
	if (timer === null) {
		timer = setInterval(setAnimation, 250);
	} else {
        clearInterval(timer);
        timer = null;
      //  document.body.style.backgroundColor = "red";
    }
}

window.onload = function() {
  document.getElementById('btnStart').onclick = animate();
}

