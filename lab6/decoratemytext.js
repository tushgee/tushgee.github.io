// Naya Battushig
// Playing with JS events

"use strict";
var timer = null;

function sayHi() {
    alert("Hello, world!");
}

function biggerText() {
    const elem = document.getElementById("myTextArea");
    //document.getElementById("myTextArea").style.fontSize = "24px";
    const currentFontSize = window.getComputedStyle(elem, null).getPropertyValue("font-size");
    elem.style.fontSize = parseInt(currentFontSize)+2 + "px";
}

function addStyles() {
    const myTextArea = document.getElementById("myTextArea");
    if (document.getElementById("myCheckBox").checked) {
        myTextArea.style.fontWeight = "bold";
        myTextArea.style.color = "green";
        myTextArea.style.textDecoration = "underline";
        document.body.style.backgroundImage = "url('http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')";
        

    } else {
        document.getElementById("myTextArea").style.fontWeight = "normal";
    }
   
}

function increaseSize() {
	if (timer === null) {
		timer = setInterval(biggerText, 500);
	} else {
        clearInterval(timer);
        timer = null;
      //  document.body.style.backgroundColor = "red";
    }
}

window.onload = function() {
	document.getElementById('myButton').onclick = increaseSize;
}

