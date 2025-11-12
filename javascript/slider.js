
const btns = [...document.getElementsByClassName("btnSlider")];
const slide01 = document.querySelector('.slide01');
let contSlide = 0;
let isLeft = false;

btns.map((btn, index) => {
    btn.addEventListener("click", () => {
        if(index){
           if(contSlide != 50){
            contSlide += 10;
           } 

        } else {
            if(contSlide != 0){
                contSlide -= 10;
            }
        }
        
        slide01.style.marginLeft = `-${contSlide}%`;
    });
});

setInterval(() => {
    if(!isLeft){
        if(contSlide != 50){
            contSlide += 10;
        } else {
            isLeft = !isLeft
        }
    } else {
        if(contSlide != 0){
            contSlide -= 10;
        }else {
            isLeft = !isLeft
        }
    }
    slide01.style.marginLeft = `-${contSlide}%`;
}, 5000);