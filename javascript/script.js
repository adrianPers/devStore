

const menu = document.querySelector(".navHeader");
let isOpen = false;
[
    ...document.getElementsByClassName('btnMenu')
].map(el => el.addEventListener('click', () => {
   
    menu.style.left = (isOpen ? '-100%' : '0px');
    isOpen = !isOpen;
     
}));

const titleBanner = document.querySelector(".banner02 span");
const wordsBanner = ["mim!", "você!", "nós!", "todos!"];
let contBanner = 1;


const pathFile = window.location.pathname;
const nameFile = pathFile.substring(pathFile.lastIndexOf('/') + 1);

if(nameFile == "sobre.html"){

    
    setInterval(() => {
    titleBanner.innerHTML = wordsBanner[contBanner];
    contBanner++;
    if(contBanner > 3){
        contBanner = 0;
    }
    
}, 2000)

}

