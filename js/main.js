let btnLeft = document.getElementById('left');

let btnRight = document.getElementById('right');
let pagination = document.querySelectorAll('.pagination>li');
let activeImg;
let activePag;
let index;


let images = document.querySelectorAll('.carousel>li');
let carousel = document.getElementById('carousel');
let first = carousel.firstElementChild.cloneNode(true);
first.classList.add('clone');
first.classList.remove('active');
let last = carousel.lastElementChild.cloneNode(true);
last.classList.add('clone');
carousel.prepend(last);
carousel.append(first);



btnRight.onclick = () => {
  for (let i = 0; i < images.length; i++) {
    if (images[i].classList.contains('active')) {
      activeImg = images[i];
      index = i;
    } else {
      continue
    }
  }

  let nextImg = activeImg.nextElementSibling;
  let number = ((index + 2) * 748);

    activeImg.classList.remove('active');
    carousel.style.transform = `translateX(-${number}px)`;
    carousel.style.transitionDuration = '.5s'
    nextImg.classList.add('active');
    
    if (nextImg.classList.contains('clone')) {   
      nextImg = carousel.firstElementChild.nextElementSibling;
      nextImg.classList.add('active');
  carousel.style.transform = `translateX(-748px)`;
    carousel.style.transitionDuration = '.0s'
      
  }
}



