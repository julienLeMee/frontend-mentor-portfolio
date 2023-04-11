const slider = tns({
  container: '.slider__wrapper',
  items: 1,
  slideBy: 'page',
  autoplay: true,
  controls: false,
  navPosition: 'bottom',
  mouseDrag: true,
  swipeAngle: false,
  speed: 400
});

document.querySelector('.slider__prev').addEventListener('click', () => {
  slider.goTo('prev');
});

document.querySelector('.slider__next').addEventListener('click', () => {
  slider.goTo('next');
});
