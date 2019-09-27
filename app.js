

let i=0;
const time=3000;
const images=['./img/Lagos12.jpg','./img/Lagos16.jpg','./img/Lagos4.jpg','./img/lagos17.jpg','./img/lagos27.jpg'];
const changeImage=function(){
    document.slider.src=images[i];
    if(i<images.length-1){
        i++;
    }
    else{
        i=0;
    }
    setTimeout("changeImage()",time);
}
window.onload=changeImage;


