
function initialSwiper () {
new Swiper('.swiper', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  
  slidesPerView:'auto',
  spaceBetween: 16,
});
}
window.innerWidth < 768 ? initialSwiper() : null;

let brands = document.querySelector('.brand-list');
let button = document.querySelector('.brand-button');
let buttonText = button.querySelector('p');
let buttonArrow = button.querySelector('div');
let count = 1;

button.addEventListener('click', (evt) => {
  evt.preventDefault();

  if (count < 2) {
    buttonText.innerHTML = 'Скрыть';
    brands.style.height = '250px';
    buttonArrow.classList.add('brand-button__arrow--down');
    count++;
  } else if (count > 1) {
    buttonText.innerHTML = 'Показать всё';
    buttonArrow.classList.remove('brand-button__arrow--down');
    count--;
    brands.style.height = '162px';
  }
})




