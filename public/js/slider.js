new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 3,
    gap: 30,
    breakpoints: {
      1000: {
      perView: 2
      },
      750: {
      perView: 1
      }
    }
  }).mount();