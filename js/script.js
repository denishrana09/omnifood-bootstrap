$(document).ready(function() {

    /* For the sticky navigation */
    $('.features-section').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('my-nav fixed-top');
        } else {
            $('nav').removeClass('my-nav fixed-top');
        }
    }, {
      offset: '120px;'
    });

    $('.works-section').waypoint(function(direction) {
        if (direction == "down") {
            $('#mobile-pic').removeClass('hide');
            $('#mobile-pic').addClass('animated fadeInUp delay-1s');
        }
    }, {
      offset: '30%;'
    });

    $('.cities-section').waypoint(function(direction) {
        if (direction == "down") {
            $('.city-card').removeClass("hide");
            $('.city-card').addClass("animated fadeIn");
        }
    }, {
      offset: '50%;'
    });

    $('.plans-section').waypoint(function(direction) {
        if (direction == "down") {
            $('#premium-card').removeClass("hide");
            $('#premium-card').addClass("animated bounceIn");
        }
    }, {
      offset: '50%;'
    });

    $('.features-section').waypoint(function(direction) {
        if (direction == "down") {
            $('.fast-food').removeClass("hide");
            $('.fast-food').addClass("animated fadeIn delay-1s");
        }
    }, {
      offset: '30%;'
    });

});

// document.addEventListener("scroll", () => {
//     const isTop = window.scrollY>=974; //1100
//     if (isTop) {
//         $('nav').addClass('my-nav fixed-top');
//     } else {
//         $('nav').removeClass('my-nav fixed-top');
//     }
// });

// document.addEventListener("scroll", ()=> {
//     const isTop = window.scrollY >= 1690;

//     if(isTop){
//         $('#mobile-pic').removeClass("hide");
//         $('#mobile-pic').addClass("animated fadeInUp delay-1s");
//         // $('#mobile-pic').addClass("fadeInUp");
//         // $('#mobile-pic').addClass("delay-1s");
//     }
// })

// document.addEventListener("scroll", ()=> {
//     const isTop = window.scrollY >= 2290;

//     if(isTop){
//         $('.city-card').removeClass("hide");
//         $('.city-card').addClass("animated fadeIn");
//     }
// })

// document.addEventListener("scroll", ()=>{
//     const isTop = window.scrollY >= 3378;
//     if(isTop){
//         $('#premium-card').removeClass("hide");
//         $('#premium-card').addClass("animated bounceIn");
//     }
// })

// document.addEventListener("scroll", ()=>{
//     const isTop = window.scrollY >= 806;
//     if(isTop){
//         $('.fast-food').removeClass("hide");
//         $('.fast-food').addClass("animated fadeIn delay-1s");
//     }
// })