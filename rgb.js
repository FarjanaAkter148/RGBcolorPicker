


function generateRgbColor() {
    var red = document.getElementById("color-slider-red").value;
    var green = document.getElementById("color-slider-green").value;
    var blue = document.getElementById("color-slider-blue").value;
    document.querySelector(".colorDisplay").style.backgroundColor =  `rgb(${red}, ${green}, ${blue})`;
   

}

