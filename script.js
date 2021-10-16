$(document).ready(function () {
  // sticky
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $('.navbar').addClass('sticky');
    } else {
      $('.navbar').removeClass('sticky');
    }
    if (this.scrollY > 500) {
      $('.btn-home').addClass('show');
    } else {
      $('.btn-home').removeClass('show');
    }
  });

  // slide-up
  $('.btn-home').click(function () {
    $('html').animate({ scrollTop: 0 });
  });

  // toggle navbar
  $('.menu-btn').click(function () {
    $('.navbar .menu').toggleClass('active');
    $('.menu-btn i').toggleClass('active');
  });

  // typing
  var typed = new Typed('.typing', {
    strings: ['Developer', 'Designer', 'Freelancer'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
  var typed = new Typed('.typing-2', {
    strings: ['Developer', 'Designer', 'Freelancer'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // owl carousel script
  $('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});
