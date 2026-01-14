"use strict" ;


const nav = document.querySelector(".nav") ;
const button = document.querySelector(".burgermenu");
const links = document.querySelectorAll(".nav__link");

if (nav){

    for (let link of links){
        link.addEventListener("click", menuclose);
    }
        button.addEventListener("click", menuswitch);
}

function menuclose(event){
    event.preventDefault();
    console.log('caca')

    if (nav.classList.contains("nav--open")){

        nav.classList.remove("nav--open");
    }


}


function menuswitch(event){
    event.preventDefault();
    console.log('caca')

    nav.classList.toggle("nav--open");
}