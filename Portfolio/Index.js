let portfolio1 = document.getElementById("portfolio1");
let nametitle = document.getElementById("nametitle");
let container = document.getElementById("container");
let about = document.getElementById("about");
let projects = document.getElementById("projects");
let skills = document.getElementById("skills");
let websitey = document.getElementById("website");
let nasay = document.getElementById("nasaapp");
let calculatey = document.getElementById("calculator");

let bruh = window.innerHeight/100;

document.getElementById("porttext").style.display = "block";
document.getElementById("projectchild5").style.height = "80vh";
document.getElementById("projectchild5").style.width = "90vw";
document.getElementById("nameywamey").style.textAlign = "left";
document.getElementById("nameywamey").style.fontSize = "1.5vw";
document.getElementById("nameywamey2").style.textAlign = "left";
document.getElementById("nameywamey2").style.fontSize = "1.5vw";
document.getElementById("nameywamey3").style.textAlign = "left";
document.getElementById("nameywamey3").style.fontSize = "1.5vw";

window.onscroll = (event) => {
    if(window.scrollY > 0){
        portfolio1.style.opacity = 1-window.scrollY/500;
        nametitle.style.opacity = 1-window.scrollY/300;
        container.style.opacity = 0+window.scrollY/500;
        if(window.scrollY >= bruh*95 && window.scrollY <= bruh*199){
            about.style.backgroundColor = "#2E8BC0";
            bruh = window.innerHeight/100;
        }else{
            about.style.backgroundColor = "";
        }
        
        
        if(window.scrollY >= bruh*199){
            projects.style.backgroundColor = "#2E8BC0";
            bruh = window.innerHeight/100;
        }else{
            projects.style.backgroundColor = "";
            bruh = window.innerHeight/100;
        }
    }
};

websitey.addEventListener("mouseover", (event) => {
        document.getElementById("websitetext").style.display = "block";
        document.getElementById("websitetext").style.animation = "1s fadein 0s";
})

websitey.addEventListener("mouseleave", (event) => {
        document.getElementById("websitetext").style.animation = "0.5s fadeout 0s";
        setTimeout((event) => {
            document.getElementById("websitetext").style.display = "none";
        }, 100)
})



nasay.addEventListener("mouseover", (event) => {
    document.getElementById("nasatext").style.display = "block";
    document.getElementById("nasatext").style.animation = "1s fadein 0s";
})

nasay.addEventListener("mouseleave", (event) => {
    document.getElementById("nasatext").style.animation = "0.5s fadeout 0s";
    setTimeout((event) => {
        document.getElementById("nasatext").style.display = "none";
    }, 100)
})



calculatey.addEventListener("mouseover", (event) => {
    document.getElementById("calctext").style.display = "block";
    document.getElementById("calctext").style.animation = "1s fadein 0s";
})

calculatey.addEventListener("mouseleave", (event) => {
    document.getElementById("calctext").style.animation = "0.5s fadeout 0s";
    setTimeout((event) => {
        document.getElementById("calctext").style.display = "none";
    }, 100)
})
