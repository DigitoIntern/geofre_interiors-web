const carousel=
document . querySelector('.carousel');
const carouselInner =
document.querySelector('.carousel-inner')
const carouselItems=
document.querySelectorAll('.carousel-item')
const carouselControlPrev=
document.querySelector('.carousel-control-prev')
const carouselControlNext=
document.querySelector('.carousel-control-next');

let currentSlide=0;

carouselControlPrev.addEventListener('click',()=>{
    currentslide--;
    if (currentSlide < 0{ currentSlide= carouselItems.length-1;
        updateCarousel();
    });

    carouselControlNext.addEventListener('click',()=>
    {currentSlide++;
    if (currentSlide >= carouselItems.length)
    {
        currentSlide=0;
    }
    updateCarousel()
});
function updateCarousel[] {
    carouselItems.forEach ((item, index) => {item.classList.remove('active');
    if (index=== currentSlide){item.classList.add('active');
        }
    })
}
})