var controller = new ScrollMagic.Controller();
$(document).ready(function() {

    gsap.registerPlugin(ScrollTrigger);
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

    // $(".card-river").each(function(i) {
    //     let thisCard = $(this);
        
        
    //     var action = gsap.timeline()
    //     .from(thisCard,{duration:1, x:'-100%', ease:"back.out(2)"})
    //     .set(thisCard,{color:'darkgreen'},'-=0.2')
        
          
         
    //     new ScrollMagic.Scene({
    //       triggerElement: this,
    //       duration: 0,
    //       triggerHook: 0.8
    //     })
    //       .setTween(action)
    //       //.addIndicators()
    //       .addTo(controller)
    //   });
    // gsap.to(".card-river", {
    //     ScrollTrigger: ".card-river",
    //     x: window.innerWidth*0.65,
    // })
    if (window.innerWidth < 600){
        var elements = document.getElementsByClassName("fab")
        for(let i = 0; i < elements.length; i++){
            elements[i].classList.remove("fa-3x")
            elements[i].classList.add("fa-2x")
        }
    }
    window.onresize = function(){
        if (window.innerWidth < 600){
            var elements = document.getElementsByClassName("fab")
            for(let i = 0; i < elements.length; i++){
                elements[i].classList.remove("fa-3x")
                elements[i].classList.add("fa-2x")
            }
        }
        if (window.innerWidth > 600){
            var elements = document.getElementsByClassName("fab")
            for(let i = 0; i < elements.length; i++){
                elements[i].classList.add("fa-3x")
                elements[i].classList.remove("fa-2x")
            }
        }
    }
    gsap.from(".card-river", {
        alpha:0
    })
    gsap.to(".card-river", { 
        x: window.innerWidth*0.65,
        alpha:1,
        duration:2,
        delay:0.75,
        scrollTrigger: {
          trigger: ".card-river",
          scrub: false,
          toggleActions: "play none none none",
        }
      })
      gsap.from(".text-river", {
          alpha:0,
          x:-window.innerWidth*0.75,
        //   y: -100
      })
      gsap.to(".text-river", { 
        x: -window.innerWidth*0.220,
        alpha:1,
        duration:2.5,
        delay:1,
        scrollTrigger: {
          trigger: ".text-river",
          scrub: false,
          toggleActions: "play none none none",
        }
      })
});



// const anim = gsap.fromTo('.card-river', {autoAlpha: 0, x: 0}, {duration: 1, autoAlpha: 1, x: window.innerWidth*0.65});
// ScrollTrigger.create({
//     trigger: ".card-river",
//     animation: anim,
//     toggleActions: 'play none none none',
//     once: true,
// });


// gsap.to(".card-river", {
//     scrollTrigger: ".box", // start the animation when ".box" enters the viewport (once)
//     x: window.innerWidth*0.65
// });

