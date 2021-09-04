let portfolio1 = document.getElementById("portfolio1");
let nametitle = document.getElementById("nametitle");
let container = document.getElementById("container");
let about = document.getElementById("about");
let projects = document.getElementById("projects");
let contact = document.getElementById("contact");
let websitey = document.getElementById("website");
let nasay = document.getElementById("nasaapp");
let calculatey = document.getElementById("calculator");
let gitty = document.getElementById("git");
let indeedy = document.getElementById("indeed");
let nicepic = document.getElementById("nicepic");

let bruh = window.innerHeight/100;


document.getElementById("projectchild5").style.height = "60vh";
document.getElementById("projectchild5").style.width = "60vw";
document.getElementById("message").style.marginTop = "22vh";
document.getElementById("message").style.marginLeft = "2vw";
document.getElementById("message").style.marginRight = "2vw";

window.onscroll = (event) => {
    if(window.scrollY > 0){
        portfolio1.style.opacity = 1-window.scrollY/500;
        nametitle.style.opacity = 1-window.scrollY/300;
        container.style.opacity = 0+window.scrollY/500;
        if(window.scrollY >= bruh*95 && window.scrollY < bruh*199){
            about.style.backgroundColor = "#2E8BC0";
            bruh = window.innerHeight/100;
        }else{
            about.style.backgroundColor = "";
        }
        
        
        if(window.scrollY >= bruh*199 && window.scrollY < bruh*377){
            projects.style.backgroundColor = "#2E8BC0";
            bruh = window.innerHeight/100;
        }else{
            projects.style.backgroundColor = "";
            bruh = window.innerHeight/100;
        }

        if(window.scrollY > bruh*377){
            contact.style.backgroundColor = "#2E8BC0";
            bruh = window.innerHeight/100;
        }else{
            contact.style.backgroundColor = "";
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

nicepic.addEventListener("mouseover", (event) => {
    document.getElementById("porttext").style.display = "block";
    document.getElementById("porttext").style.animation = "1s fadein 0s";
})

nicepic.addEventListener("mouseleave", (event) => {
    document.getElementById("porttext").style.animation = "0.5s fadeout 0s";
    setTimeout((event) => {
        document.getElementById("porttext").style.display = "none";
    }, 100)
})

gitty.addEventListener("mouseover", (event) => {
    gitty.style.width = "6vw";
    gitty.style.height = "6vw";
    gitty.style.marginBottom = "6vh";
    gitty.style.animation = ".75s enlarge 0s";
    setTimeout((event) => {
    }, 750);
})

gitty.addEventListener("mouseleave", (event) => {
    gitty.style.width = "4vw";
    gitty.style.height = "4vw";
    gitty.style.marginBottom = "12vh";
    gitty.style.animation = ".75s unlarge 0s";
    setTimeout((event) => {
    }, 750);
})

indeedy.addEventListener("mouseover", (event) => {
    indeedy.style.width = "6vw";
    indeedy.style.height = "6vw";
    indeedy.style.marginBottom = "6vh";
    indeedy.style.animation = ".75s enlarge 0s";
    gitty.style.marginTop = "3vh";
    gitty.style.marginBottom = "9vh";
    gitty.style.animation = ".75s haleymation 0s";
    setTimeout((event) => {
    }, 750);
})

indeedy.addEventListener("mouseleave", (event) => {
    indeedy.style.width = "4vw";
    indeedy.style.height = "4vw";
    indeedy.style.marginBottom = "12vh";
    indeedy.style.animation = ".75s unlarge 0s";
    gitty.style.marginTop = "0vh";
    gitty.style.marginBottom = "12vh";
    gitty.style.animation = ".75s undohaleymation 0s";
    setTimeout((event) => {
    }, 750);
})
