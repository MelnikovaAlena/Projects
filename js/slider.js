let images = [
    {
        src: './images/jpg/image-2.jpg',
        city: 'Rostov-on-Don \n LCD admiral',
        area: '81 m2',
        time: '3.5 months',
        cost: 'Upon request'
    },
    {
        src: './images/jpg/image-4.jpg',
        city: 'Sochi \n Thieves',
        area: '105 m2',
        time: '4 months',
        cost: 'Upon request'
    },
    {
        src: './images/jpg/image-5.jpg',
        city: 'Rostov-on-Don \n Patriotic',
        area: '93 m2',
        time: '3 months',
        cost: 'Upon request'
    }
]

function initSlider(options) {
  if (!images || !images.length) return;
  
  options = options || {
    titles: false,
    dots: true,
    autoplay: false
  } 

  let sliderImages = document.querySelector(".slider__images");
  let sliderArrows = document.querySelector(".block-2__arrows");
  let sliderDots = document.querySelector(".slider__dots");
  
  initImages();
  initArrows();
  initDots();
  
  
  function initImages() {
    images.forEach((image, index) => {
      let imageDiv = `<div class="image n${index} ${index === 0? "active" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
      sliderImages.innerHTML += imageDiv;
    });
  }
  
  function initArrows() {
    sliderArrows.querySelectorAll(".block-2__arrow").forEach(arrow => {
      arrow.addEventListener("click", function() {
        let curNumber = +sliderImages.querySelector(".active").dataset.index;
        let nextNumber;
        if (arrow.classList.contains("left")) {
          nextNumber = curNumber === 0? images.length - 1 : curNumber - 1;
        } else {
          nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
        }
        moveSlider(nextNumber);
      });
    });
  }
  
  function initDots() {
    images.forEach((image, index) => {
      let dot = `<div class="slider__dots-item n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`;
      sliderDots.innerHTML += dot;
    });
    sliderDots.querySelectorAll(".slider__dots-item").forEach(dot => {
      dot.addEventListener("click", function() {
        moveSlider(this.dataset.index);
 sliderDots.querySelector(".active").classList.remove("active");
        this.classList.add("active");
      })
    })
  }
  function moveSlider(num) {
    sliderImages.querySelector(".active").classList.remove("active");
 sliderImages.querySelector(".n" + num).classList.add("active");
  }
}
  
document.addEventListener("DOMContentLoaded", initSlider);