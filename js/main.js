let btnLeft = document.getElementById('left');

let btnRight = document.getElementById('right');
let pagination = document.querySelectorAll('.pagination>li');
let activeImg;
let activePag;
let index;


let images = document.querySelectorAll('.carousel>li');
const img = ['img/img1.jpg', 'img/img2.jpg', 'img/img3.jpg'];
let carousel = document.getElementById('carousel');

let number = 748;
let xxx = 1;

btnRight.onclick = () => {

  let active = document.querySelector('.active');

  if (xxx >= 3) {
    console.log(carousel);
    const prev = carousel.lastElementChild.previousElementSibling.innerHTML = `<img src="${img[carousel.children.length-1]}">`
    carousel.lastElementChild.innerHTML = `<img src="${img[carousel.children.length - 3]}">`
    carousel.style.transform = `translateX(-${number - 748 * 2}px)`;
    carousel.style.transitionDuration = ''
    // carousel.style.transitionDuration = '.2s';

    setTimeout(function() {
      carousel.style.transform = `translateX(-${number - 748}px)`;
      carousel.style.transitionDuration = '.2s';

    }, 0);

    return;
  }
  xxx++


  for (let i = 0; i < images.length; i++) {
    if (images[i].classList.contains('active')) {
      activeImg = images[i];
      index = i;
    }
  }

  let nextImg = activeImg.nextElementSibling;

  activeImg.classList.remove('active');
  carousel.style.transform = `translateX(-${number}px)`;
  carousel.style.transitionDuration = '.2s'
  nextImg.classList.add('active');
  number += 748

}



