$(document).ready(function() {

  // $('h1').click(function() {
  //   $(this).css('background-color', '#ff0000');
  // });
  //


/*---------------------------this for sticky navigation---------------------------*/
  $('.js--section-features').waypoint(function(direction) {
    if (direction == "down") {
        $('nav').addClass('sticky');
    } else {
        $('nav').removeClass('sticky');
    }
  }, {
    offset: '60px;'
  });

/*------------------------scroll on buttons*---------------------------*/
  $('.jss--scroll-to-plans').click(function () {
    $('html,body').animate({scrollTop: $('.js--section-plans').offset().top
  }, 1000);
  })

  $('.jss--scroll-to-start').click(function () {
    $('html,body').animate({scrollTop: $('.js--section-features').offset().top
  }, 1000);
  })

/*-----------------------navigation scroll---------------------------------*/


// Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
    &&
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});

/*-----------------------animation on scroll---------------------------------*/
$('.js--wp-1').waypoint(function(direction) {         /*add animated.css to our project in html*/
      $('.js--wp-1').addClass('animated fadeIn');   /*choose effect https://daneden.github.io/animate.css/*/
  }, {                                             /*also add more classes in style.css*/
    offset: '70%;'                                  /*.js--wp-1 {opacity: 0;}*/
  });                                               /*animation-duration: 1s;*/
                                                    /*.js--wp-1 .animated {opacity: 1;}*/
  $('.js--app-screen').waypoint(function(direction) {
        $('.js--app-screen').addClass('animated fadeInUp');
    }, {
      offset: '70%;'
    });

  $('.js--cities').waypoint(function(direction) {
        $('.js--cities').addClass('animated fadeIn');
    }, {
      offset: '70%;'
    });

  $('.js--mainn').waypoint(function(direction) {
        $('.js--mainn').addClass('animated pulse');
    }, {
      offset: '70%;'
    });
/*----------------------mobil navigation---------------------------------*/
$('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav'); /*open menu*/
        var icon = $('.js--nav-icon i');

        nav.slideToggle(200);
        if(icon.hasClass('ion-ios-drag')) {
           icon.addClass('ion-ios-close-outline');
           icon.removeClass('ion-ios-drag');
        } else {
          icon.addClass('ion-ios-drag');
          icon.removeClass('ion-ios-close-outline');
        }
})
/*----------------------maps--------------------------------*/
var map = new GMaps({
  div: '.map',
  lat: 32.7693068,
  lng: -117.14,
  zoom: 13
});

map.addMarker({
  lat: 32.7693042,
  lng: -117.18926,
  title: 'Ihor Tkachuk',
  infoWindow: {
  content: '<p>Ihor Tkachuk</p>'
  }
});






});
