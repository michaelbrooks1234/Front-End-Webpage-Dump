let portfolio1 = document.getElementById("portfolio1");
let nametitle = document.getElementById("nametitle");
let container = document.getElementById("container");
let about = document.getElementById("about");
let projects = document.getElementById("projects");
let skills = document.getElementById("skills");

let bruh = window.innerHeight/100;

window.onscroll = (event) => {
    if(window.scrollY > 0){
        portfolio1.style.opacity = 1-window.scrollY/500;
        nametitle.style.opacity = 1-window.scrollY/300;
        container.style.opacity = 0+window.scrollY/500;
        if(window.scrollY >= bruh*95 && window.scrollY <= bruh*180){
            about.style.backgroundColor = "#E68910";
            bruh = window.innerHeight/100;
        }else{
            about.style.backgroundColor = "";
        }
        
        
        if(window.scrollY >= bruh*180){
            projects.style.backgroundColor = "#E68910";
            bruh = window.innerHeight/100;
        }else{
            projects.style.backgroundColor = "";
            bruh = window.innerHeight/100;
        }
    }
};
