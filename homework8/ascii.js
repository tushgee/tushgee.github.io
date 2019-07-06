const Asciimation = (function(){

  "use strict";
  let timer = null;
  let frameIndex = 0;
  let frames;

  function setAnimation() {
      const animation = document.getElementById("selAnimation").value;
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
      document.getElementById('btnStart').disabled = true;
      document.getElementById('selAnimation').disabled = true;
      document.getElementById('btnStop').disabled = false;
    } 
        
  }

  function stop() {
    if (timer) {
      clearInterval(timer);
      timer = null;
      document.getElementById('btnStop').disabled = true;
      document.getElementById('btnStart').disabled = false;
      document.getElementById('selAnimation').disabled = false;
    
    }
  }

  function changeSize() {
    document.getElementById("myTxtStage").style.fontSize = document.getElementById("selSize").value;
  }


  function turbo() {

    if (document.getElementById("chbTurbo").checked== true) {
      if (timer) {
        clearInterval(timer);
      } 
      if (document.getElementById('btnStart').disabled) timer = setInterval(setAnimation, 50);
    } else {
      if (timer) {
        clearInterval(timer);
      } 
      if (document.getElementById('btnStart').disabled) timer = setInterval(setAnimation, 250);
    };
  }

  return {
    animate: animate,
    stop: stop,
    turbo: turbo,
    setAnimation: setAnimation,
    changeSize: changeSize
  }

})();

window.onload = function() {
  document.getElementById('btnStart').onclick = Asciimation.animate;
  document.getElementById('btnStop').onclick = Asciimation.stop;
  document.getElementById('chbTurbo').onclick = Asciimation.turbo;
  document.getElementById('btnStop').disabled = true;
  document.getElementById('selAnimation').onchange = Asciimation.setAnimation;
  document.getElementById('selSize').onchange = Asciimation.changeSize;
}



