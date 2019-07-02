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
        

    } else {
        document.getElementById("myTextArea").style.fontWeight = "normal";
    }
   
}