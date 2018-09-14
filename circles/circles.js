function drawCircle(x, y, radius, width, color)
{
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.strokeStyle = color;
    ctx. lineWidth = width;
    ctx. beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    ctx.stroke();
}

// now we can make all types of circles
drawCircle(50, 50, 20, 5, "blue");
drawCircle(100, 100, 24, 8, "green")

// This function will make rectangles 
function drawRectangle(length, width, color, lineWidth, x, y)
{
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.strokeStyle = color;
    ctx. lineWidth = lineWidth;
    ctx.rect(x, y, width, length);
    ctx.stroke();
}

drawRectangle(100, 400, "red", 10, 150, 100)

//this function will draw filled circles
function filledCircle (x, y, radius, color)
{
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    ctx.fill();
}

filledCircle(75, 75, 70, "green");
filledCircle(75, 75, 69, "red");
filledCircle(75, 75, 68, "blue");
filledCircle(75, 75, 67, "green");
filledCircle(75, 75, 66, "red");
filledCircle(75, 75, 65, "blue");
filledCircle(75, 75, 64, "green");
filledCircle(75, 75, 63, "red");
filledCircle(75, 75, 62, "blue");
filledCircle(75, 75, 61, "green");
filledCircle(75, 75, 60, "red");
filledCircle(75, 75, 59, "blue");
filledCircle(75, 75, 58, "green");
filledCircle(75, 75, 57, "red");
filledCircle(75, 75, 56, "blue");
filledCircle(75, 75, 55, "green");
filledCircle(75, 75, 54, "red");
filledCircle(75, 75, 53, "blue");
filledCircle(75, 75, 52, "green");
filledCircle(75, 75, 51, "red");
filledCircle(75, 75, 50, "blue");
filledCircle(75, 75, 49, "green");
filledCircle(75, 75, 48, "red");
filledCircle(75, 75, 47, "blue");
filledCircle(75, 75, 46, "green");
filledCircle(75, 75, 45, "red");
filledCircle(75, 75, 44, "blue");
filledCircle(75, 75, 43, "green");
filledCircle(75, 75, 42, "red");
filledCircle(75, 75, 41, "blue");
filledCircle(75, 75, 40, "green");
filledCircle(75, 75, 39, "red");
filledCircle(75, 75, 38, "blue");
filledCircle(75, 75, 37, "green");
filledCircle(75, 75, 36, "red");
filledCircle(75, 75, 35, "blue");
filledCircle(75, 75, 34, "green");
filledCircle(75, 75, 33, "red");
filledCircle(75, 75, 32, "blue");
filledCircle(75, 75, 31, "green");
filledCircle(75, 75, 30, "red");
filledCircle(75, 75, 29, "blue");
filledCircle(75, 75, 28, "green");
filledCircle(75, 75, 27, "red");
filledCircle(75, 75, 26, "blue");
filledCircle(75, 75, 25, "green");
filledCircle(75, 75, 24, "red");
filledCircle(75, 75, 23, "blue");
filledCircle(75, 75, 22, "green");
filledCircle(75, 75, 21, "red");
filledCircle(75, 75, 20, "blue");
filledCircle(75, 75, 19, "green");
filledCircle(75, 75, 18, "red");
filledCircle(75, 75, 17, "blue");
filledCircle(75, 75, 16, "green");
filledCircle(75, 75, 15, "red");
filledCircle(75, 75, 14, "blue");
filledCircle(75, 75, 13, "green");
filledCircle(75, 75, 12, "red");
filledCircle(75, 75, 11, "blue");
filledCircle(75, 75, 10, "green");
filledCircle(75, 75, 9, "red");
filledCircle(75, 75, 8, "blue");
filledCircle(75, 75, 7, "green");
filledCircle(75, 75, 6, "red");
filledCircle(75, 75, 5, "blue");
filledCircle(75, 75, 4, "green");
filledCircle(75, 75, 3, "red");
filledCircle(75, 75, 2, "blue");
filledCircle(75, 75, 1, "green");