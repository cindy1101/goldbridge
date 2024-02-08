//웹 스크롤시 생기는 이벤트
function headerScrollEvent(){

    let headerTop = $('.header_web_ex').offset().top;


    $(window).scroll(function(){

        let scrollTop = $(window).scrollTop();

        if(headerTop < scrollTop && $(window).outerWidth() > 1024){

            $('.header_web_ex').addClass('on');
            $('.header_cont_lnb li a p').addClass('on');
            $('.header_cont_box_logo img').attr('src','img/logo_color.png');

        }else{

            $('.header_web_ex').removeClass('on');
            $('.header_cont_lnb li a p').removeClass('on');
            $('.header_cont_box_logo img').attr('src','img/logo_white.png');

        }

        

    });

}

//웹 헤더 마우스 올렸을 때
function headerHoverEvent() {

    $('.header_web_ex').addClass('on');
    $('.header_cont_lnb li a p').addClass('on');
    $('.header_cont_box_logo img').attr('src','img/logo_color.png');

}

//웹 헤더 마우스 떨어졌을 때 && 스크롤된 값이 100px 보다 작을 때 진행
function headerNotHoverEvent() {

    let scrollTop = $(window).scrollTop();

    if(scrollTop < 50){

        $('.header_web_ex').removeClass('on');
        $('.header_cont_lnb li a p').removeClass('on');
        $('.header_cont_box_logo img').attr('src','img/logo_white.png');
    

    }
    
}


//모바일 고객전화 height 조절
function mobileCallBtn(){

    let windowHeight = $(window).outerHeight();

    if (windowHeight <= 530) {

        $('.header_mobile_call').addClass('position');

    } else {

        $('.header_mobile_call').removeClass('position');

    }

}


//모바일 헤더 버튼 클릭시 일어나는 이벤트
function mobileHeader(){


    if($('.header_mobile_sheet_ex').hasClass('on')){

        $('.header_mobile_cont_menu span:nth-child(1)').removeClass('on');
        $('.header_mobile_cont_menu span:nth-child(2)').removeClass('on');
        $('.header_mobile_cont_menu span:nth-child(3)').removeClass('on');
        $('.header_mobile_sheet_ex').removeClass('on');
        $('body').removeClass('scrollOff');

    }else{

        $('.header_mobile_cont_menu span:nth-child(1)').addClass('on');
        $('.header_mobile_cont_menu span:nth-child(2)').addClass('on');
        $('.header_mobile_cont_menu span:nth-child(3)').addClass('on');
        $('.header_mobile_sheet_ex').addClass('on');
        $('body').addClass('scrollOff');
        
    }
     
}

//크기가 커질 때 클래스 사라지게 한다
function widthMobileHeader(){

    if($(window).outerWidth() > 1025){

        $('.header_mobile_cont_menu span:nth-child(1)').removeClass('on');
        $('.header_mobile_cont_menu span:nth-child(2)').removeClass('on');
        $('.header_mobile_cont_menu span:nth-child(3)').removeClass('on');
        $('.header_mobile_sheet_ex').removeClass('on');
        $('body').removeClass('scrollOff');

    } 

}


$(document).ready(function() {

    headerScrollEvent();

    $(window).resize(function(){

        widthMobileHeader();
        mobileCallBtn();
    
    });

});