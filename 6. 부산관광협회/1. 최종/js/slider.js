
//상단 빌보드 슬라이더
$('.visual_box').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    autoplayTimeout:4000,
    autoplay: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

//관광안내소 슬라이더
$('.information_box').owlCarousel({
    margin:20,
    autoplayHoverPause:true,
    autoplay: true,
    autoplayTimeout:4000,
    loop:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2,
            margin:30
        },
        768:{
            items:2,
            margin:40
        },
        1024:{
            items:3,
            margin:30
        },
        1380:{
            items:3,
            margin:50
        }
    }
});

//관광정보 구별 슬라이더
$('.borough_banner_box').owlCarousel({
    autoplayHoverPause:true,
    autoplay: true,
    autoplayTimeout:3000,
    loop:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

//관광정보 구별 슬라이더
$('.borough_banner_box_wide').owlCarousel({
    autoplayHoverPause:true,
    autoplay: true,
    autoplayTimeout:3000,
    loop:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

//퀵메뉴 슬라이더
$('.quick_menu_box').owlCarousel({
    autoplayHoverPause:true,
    //autoplay: true,
    autoplayTimeout:4000,
    //loop:true,
    responsive:{
        0:{
            items:2,
            loop:true,
            autoplay:true
        }, 
        300:{
            items:3,
            loop:true,
            autoplay:true
        },
        420:{
            items:4,
            loop:true,
            autoplay:true
        },
        600:{
            items:3,
            loop:true,
            autoplay:true
        },
        650:{
            items:4,
            loop:true,
            autoplay:true
        },
        700:{
            items:5,
            loop:true,
            autoplay:true
        },
        800:{
            items:6,
            loop:true,
            autoplay:true
        },
        1000:{
            items:7,
            loop:true,
            autoplay:true
        },
        1200:{
            items:9,
            loop:true,
            autoplay:true
        },
        1420:{
            items:9,
            loop:false,
            autoplay:false
        }
    }
});



// 하단 띠 배너 슬라이더
$('.bottom_logo_mobile').owlCarousel({

    autoplayHoverPause:true,
    autoplay: true,
    autoplayTimeout: 4000,
    loop: true,
    autoWidth:true,
    responsive:{
        0:{
            margin: 20
        },
        601:{
            items:3,
            margin: 30
        }
    }

});