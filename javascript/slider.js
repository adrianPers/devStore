
const btns = [...document.getElementsByClassName("btnSlider")];
const slides01 = [...document.getElementsByClassName("slide01")];
let contSlide = 0;
let isLeft = false;

btns.map((btn, index) => {
    btn.addEventListener("click", () => {
        if(index%2 == 1){
           if(contSlide != 50){
            contSlide += 10;
           } 

        } else {
            if(contSlide != 0){
                contSlide -= 10;
            }
        }
        
        slides01.map(
            slide => slide.style.marginLeft = `-${contSlide}%`
        );
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
    slides01.map(
            slide => slide.style.marginLeft = `-${contSlide}%`
        );
}, 5000);