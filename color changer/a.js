function changeColor() {
    var colorValue = prompt("what background color?");
    document.body.style.backgroundColor = colorValue;
}

function changeTextColor() {
    var colorValue = prompt ("what text color?");
    document.body.style.color = colorValue;
}

 function welcomeMessage()
 {
     var name = prompt("what is your name?");
     var message = "<h1>Hello " + name + "&#x263A<h1>";
     document.getElementById("line1").innerHTML = message;
 }