let i = 0;
let image = [];
let time = 10000;

image[0] = "../img/1.jpg";
image[1] = "../img/2.jpg";
image[2] = "../img/3.jpg";
image[3] = "../img/4.jpg";

function changeImg() {
    document.slide.src = image[i];;
    if(i < image.length -1){
        i++;
    } else {
        i=0;
    }
    setTimeout("changeImg()",time);
}

window.onload = changeImg();