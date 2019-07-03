"use strict";

function setAnimation() {
    const animation = document.getElementById("animationId").value;
    if (animation.toUpperCase()!="BLANK"){
      //  document.getElementById("myTxtStage").value = animation.toUpperCase();
        document.getElementById("myTxtStage").value = ANIMATIONS[animation];
    }
}