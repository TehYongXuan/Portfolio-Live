    anime({
    targets: '#image',
    translateX: [-400, 0],
    delay: anime.stagger(100, { from: 'first' }),// increase delay by 100ms for each elements.
    duration: 6000
})
anime({
    targets: '#img',
    translateX: [-400, 0],
    delay: anime.stagger(100, { from: 'first' }),// increase delay by 100ms for each elements.
    duration: 6000
})
anime({
    targets: '#film1',
    translateX: [400, 0],
    delay: anime.stagger(100, { from: 'first' }),// increase delay by 100ms for each elements.
    duration: 6000
})


var easeinout2 = anime({

    targets: 'h3',
    scale: [
        { value: .1, easing: 'easeOutSine', duration: 500 },
        { value: 1, easing: 'easeInOutQuad', duration: 1200 }
    ],
    delay: anime.stagger(0, { grid: [14, 5], from: 'center' })
});
anime({
    targets: '#yong',
    translateY: [-400, 0],
    delay: anime.stagger(100, { from: 'first' }),// increase delay by 100ms for each elements.
    duration: 6000
})
anime({
    targets: '#xuan',
    translateY: [-300, 0],
    delay: anime.stagger(100, { from: 'first' }),// increase delay by 100ms for each elements.
    duration: 6000
})
var easeinout2 = anime({

    targets: 'h2',
    scale: [
        { value: .1, easing: 'easeOutSine', duration: 500 },
        { value: 1, easing: 'easeInOutQuad', duration: 1200 }
    ],
    delay: anime.stagger(0, { grid: [14, 5], from: 'center' })
});


var slide1 = anime({
    targets: '.carousel',
    translateY: [50, 0],
    duration: 2000,
    loop: true
    
  })

  var easeinout2 = anime({

    targets: 'h4',
    scale: [
        { value: .1, easing: 'easeOutSine', duration: 500 },
        { value: 1, easing: 'easeInOutQuad', duration: 1200 }
    ],
    delay: anime.stagger(0, { grid: [14, 5], from: 'center' })
});
anime({
    targets: '.card',
    scale: [
      {value: .1, easing: 'easeOutSine', duration: 500},
      {value: 1, easing: 'easeInOutQuad', duration: 1200}
    ],
    delay: anime.stagger(200, {grid: [14, 5], from: 'center'})
  });

  
