const pages = document.querySelector(".page");
const box1 = document.querySelector("#box1");
const box2= document.querySelector("#box2");
const box3 = document.querySelector("#box3");
const ele1 = document.querySelector("#ele1");
const ele2 = document.querySelector("#ele2");
const ele3 = document.querySelector("#ele3");
const ele4 = document.querySelector("#ele4");
const ele5 = document.querySelector("#ele5");
const ele6 = document.querySelector("#ele6");
const ele7 = document.querySelector("#ele7");
const ele8 = document.querySelector("#ele8");


const activepage = (page) =>{
            document.querySelectorAll(".page").forEach(p => {
                p.classList.remove("active");
            });

            document.getElementById(page).classList.add("active");
};


const home = document.querySelector("#box1").addEventListener("click" , () =>{
    activepage("page1");
});

const about = document.querySelector("#box2").addEventListener("click" , () =>{
    activepage("page2");
});

const solarenergy = document.querySelector("#ele1").addEventListener("click" , () =>{
    activepage("page3");
});

const windenergy = document.querySelector("#ele2").addEventListener("click" , () =>{
    activepage("page4");
});

const hydroenergy = document.querySelector("#ele10").addEventListener("click" , () =>{
    activepage("page5");
});

const geothermalenergy = document.querySelector("#ele4").addEventListener("click" , () =>{
    activepage("page6");
});

const geomassenergy = document.querySelector("#ele5").addEventListener("click" , () =>{
    activepage("page7");
});

const hydrogenenergy = document.querySelector("#ele6").addEventListener("click" , () =>{
    activepage("page8");
});

const frictionenergy = document.querySelector("#ele7").addEventListener("click" , () =>{
    activepage("page9");
});

const development = document.querySelector("#box3").addEventListener("click" , () =>{
    activepage("page10");
});
