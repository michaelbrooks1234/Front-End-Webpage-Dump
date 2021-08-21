let portfolio1 = document.getElementById("portfolio1");
let nametitle = document.getElementById("nametitle");
let container = document.getElementById("container");

window.onscroll = (event) => {
    if(window.scrollY > 0){
        portfolio1.style.opacity = 1-window.scrollY/500;
        nametitle.style.opacity = 1-window.scrollY/300;
    }if(window.scrollY > 100){
        container.style.transform = "translateY(0)";
        container.style.animation = "fadein linear 1s";
    }else{
        container.style.transform = "translateY(-100%)";
    }
};
