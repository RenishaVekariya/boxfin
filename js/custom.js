$(document).ready(function () {


    $('.top_scroll').hide();

    $(window).scroll(function () {
        h = $(window).scrollTop();
        if (h > 160) {
            $('.sc-header-two ').addClass('top_fixed');
            $('.top_scroll').fadeIn(500);
            $('.top_scroll').addClass('transform')
            

        }
        else {
            $('.sc-header-two').removeClass('top_fixed');
            $('.top_scroll').fadeOut(500)
            $('.top_scroll').removeClass('transform')


        }
    })

    $('.top_scroll').click(function () {
        $('html,body').animate({ scrollTop: 0 }, 550)
    })

    $('.mo-sub-menu').hide();



    $('.mo-main-menu li a').click(function () {
        $(this).siblings('.mo-sub-menu').slideToggle();
    })

    $('.mo-main-menu li i').click(function () {
        $(this).toggleClass('fa-plus fa-minus');
    })

    $("#banner").owlCarousel({
        items: 1,
        dots: false,
        nav: true,
        loop: true,
        navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
        autoplay: true,
        autoplayTimeout: 10000,
        animateIn: 'animate__fadeIn',
        animateOut: 'animate__fadeOut',
    });

    $("#brand").owlCarousel({
        // items: 5,
        loop: true,
        dots:false,
        responsive: {
            0: {
                items: 1,
            },
          
            576:{
                items:2,
            },

            768: {
                items: 3,
            },
            992:{
                items:3,
            },
            1200:{
                items:5,
            }
            
        }
    });

    $("#team").owlCarousel({
        items: 4,
        loop: true,
        margin: 20,
        autoplay: true,
        dots: false,
        nav: true,
        navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1,
            },

            768: {
                items: 2,
            },
            992:{
                items:3,
            },
            1200:{
                items:4,
            }
        }
    });

    $("#Testimonial-2").owlCarousel({
        items: 1,
        loop: true,
        // margin:20,
        autoplay: true,
        dots: false,
        nav: true,
        navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
         
    });

    $("#project-slidar").owlCarousel({
        // items: 4,
        loop: true,
        margin: 20,
        autoplay: true,
        dots: false,
        nav: true,
        navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1,
            },

            768: {
                items: 2,
            },
            992:{
                items:3,
            },
            1200:{
                items:4,
            }
        }
    });

    $("#blog").owlCarousel({

        loop: true,
        margin: 20,
        autoplay: true,
        dots: false,
        responsive: {
            0: {
                items: 1,
            },

            768: {
                items: 2,
            },
            992:{
                items:3,
            }
        }

    });

    $("#team-2").owlCarousel({
        items:2,
        loop: true,
        margin: 30,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
            },

            567:{
                items:1,
            },

            768: {
                items: 2,
            }
          
        }
    });

    $("#project-slidar-2").owlCarousel({
        // items: 4,
        loop: true,
        margin: 30,
        autoplay: true,
        dots: false,
        nav: true,
        navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1,
            },
            576:{
                items:2,
            },

            768: {
                items: 2,
            },
            992:{
                items:3,
            },
            1200:{
                items:3,
            }
        }
    });
    $("#feedback").owlCarousel({
        items:3,
        loop: true,
        margin: 30,
        dots:false,
        nav:true,
        navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],

        autoplay: true,
        responsive: {
            0: {
                items: 1,
            },

            567:{
                items:2,
            },

            768: {
                items: 2,
            },

            992:{
                items:3,
            }
          
        }
    });

    $("#team-3").owlCarousel({
        items: 3,
        loop: true,
        margin: 30,
        // autoplay: true,
        dots: false,
        responsive: {
            0: {
                items: 1,
            },
            556:{
                items:2
            },

            768: {
                items: 2,
            },
            992:{
                items:3,
            },
            
        }
    });


    new WOW().init();

    var owl = $('#banner');
    owl.owlCarousel();
    // Listen to owl events:
    owl.on('changed.owl.carousel', function (event) {
        new WOW().init();

    })
});