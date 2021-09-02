$(document).ready(function() {
    /* code here */
    var nav = document.getElementById('nav');
    var navList = document.getElementById('js-menu');
    var buttonToggle = document.getElementById('js-navbar-toggle');
    var toggleDown = true;
    // $('#js-menu').slideDown(1000);
    $('#js-navbar-toggle').click(function() {
        $('#js-menu').slideToggle('slow');
        toggleDown = !toggleDown;
        console.log(toggleDown);
    });
    $('.header-video').css('margin-top', nav.offsetHeight + 'px');
    $('.hero-text-video').css('margin-top', nav.offsetHeight + 'px');

    function transformRotate() {
        document.getElementById('menu').classList.toggle('rotate');
    }

    // window.onScroll = function() {
    //     if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    //         $('nav').slideDown('slow');
    //         console.log('down');
    //     }
    // };

    //
    window.onscroll = function() {
        scrollFunction();
    };
    if (window.innerWidth < 760) {
        $('.top-wrapper, .main-nav').css('transition', 'none');
        // scrollFunction();
    }
    window.onresize = function() {
        if (window.innerWidth < 760) {
            $('.top-wrapper, .main-nav').css('transition', 'none');
            // scrollFunction();
        }
    };
    var prevScrollpos = window.pageYOffset;

    function scrollFunction() {
        // console.log();
        $('.hero-text-video').css('margin-top', nav.offsetHeight + 'px');
        $('.header-video').css('margin-top', nav.offsetHeight + 'px');
        if (window.innerWidth > 760) {
            if (
                document.body.scrollTop > 80 ||
                document.documentElement.scrollTop > 80
            ) {
                document.getElementById('wrap').style.padding = '0';
                navList.setAttribute('style', 'font-size: 1.2rem !important');
            } else {
                navList.setAttribute('style', 'font-size: 1.3rem !important');
                // navList.style.fontSize = '2.3rem !important';
                document.getElementById('wrap').style.padding = '0.5rem';
            }
        } else {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                $('nav').slideDown(500);
            } else {
                $('nav').slideUp(500);
            }
            prevScrollpos = currentScrollPos;
        }
    }

    // console.log();
});


const anim = gsap.fromTo('.card-river', {autoAlpha: 0, x: 0}, {duration: 1, autoAlpha: 1, x: window.innerWidth*0.65});
ScrollTrigger.create({
  trigger: ".card-river",
  animation: anim,
  toggleActions: 'play none none none',
  once: true,
});