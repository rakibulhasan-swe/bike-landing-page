// selecting container 
let redBike = document.getElementById("red");
let blueBike = document.getElementById("blue");
let blackBike = document.getElementById("black");
let bike = document.getElementById("bikePic");

redBike.onclick = function(){
    bike.style.backgroundImage = "url(images/BMW1.png)";
}
blueBike.onclick = function(){
    bike.style.backgroundImage = "url(images/BMW2.png)";
}
blackBike.onclick = function(){
    bike.style.backgroundImage = "url(images/BMW3.png)";
}
