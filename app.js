function imageSlider(anything){
    document.querySelector('.bcs').src = anything;
}

function changeCircleColor(color){
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}

var loader = document.getElementById("preloader");

window.addEventListener("load", function(){
    loader.style.display = "none";
})