const button = document.querySelector(".nightTheme");
const body = document.querySelector("#body");
const main = document.querySelector("#main");
const image = document.querySelector("#img-div");
const tribute = document.querySelector("#tribute-info");
const line = document.querySelector(".line");
const link = document.querySelector("#link");
//declares html sections as a variable to manipulate their classList

button.addEventListener("click", Toggle); //Calls the Toggle function upon clicking on the sun / moon icons.
let nightMode=false;

function Toggle(){ 

    //Adds the "active" class to the declared elements
    if(nightMode==false){ 
        button.classList.add("active");
        body.classList.add("active");
        main.classList.add("active");
        image.classList.add("active");
        tribute.classList.add("active");
        line.classList.add("active");
        link.classList.add("active");

        nightMode=true;
    }
    //Removes the "active" class from the declared elements
    else{
        button.classList.remove("active");
        body.classList.remove("active");
        main.classList.remove("active");
        image.classList.remove("active");
        tribute.classList.remove("active");
        line.classList.remove("active");
        link.classList.remove("active");

        nightMode=false;
    }
}