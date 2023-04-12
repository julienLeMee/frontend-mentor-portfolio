let slider = tns({
  container: '.my-slider',
  items: 3,
  slideBy: '1',
  controlsPosition: 'bottom',
  nav: false,
  prevButton: '.slider__prev',
  nextButton: '.slider__next',
  responsive: {
    320: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1024: {
      items: 3,
    },
  },
});
