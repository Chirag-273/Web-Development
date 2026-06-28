const div = document.getElementById("box");

const colorButton = document.getElementById("colorBox");

const button = document.getElementById("default");

const defaultColor = "black";

// Reset to default color
button.addEventListener("click", function () {
    div.style.backgroundColor = defaultColor;
    colorButton.value = "#000000";
});

// Change box color
colorButton.addEventListener("input", function () {
    div.style.backgroundColor = colorButton.value;
});