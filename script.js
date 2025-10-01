

const menu = document.querySelector(".navHeader");
let isOpen = false;
[
    ...document.getElementsByClassName('btnMenu')
].map(el => el.addEventListener('click', () => {
   
    menu.style.left = (isOpen ? '-100%' : '0px');
    isOpen = !isOpen;
     
}));
