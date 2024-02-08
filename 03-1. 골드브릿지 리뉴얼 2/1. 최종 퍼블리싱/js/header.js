
//웹 헤더
function webHeader(){

    $(window).scroll(function(){

        let scrollTop = $(window).scrollTop();

        if(0 < scrollTop && $(window).outerWidth() > 768){

            $('.web_header_ex').addClass('on');

        }else{

            $('.web_header_ex').removeClass('on');

        }

    });

}


function mobileHeader(){

    $('.header_menu_open').click(function(){

        if($(window).outerWidth() <= 1024){

            $('.mobile_header_sheet').css({

                'right':'0'

            });

            $('body').addClass('scrollOff');

        }

    });

    $('.close_mobile_header').click(function(){

        if($(window).outerWidth() <= 1024){

            $('.mobile_header_sheet').css({

                'right':'-100%'

            });

            $('body').removeClass('scrollOff');

        }

    });

}

$(document).ready(function(){
    
    webHeader();
    mobileHeader();

    var resizeTimeout;

    $(window).resize(function(){

        clearTimeout(resizeTimeout);

        resizeTimeout = setTimeout(function() {

            webHeader();
            mobileHeader();
            
        }, 250);

    });

    //개인정보취급방침 클릭시
    $('.open_personal_btn').click(function(){

        $('.personal_popup_ex').fadeIn();
        $('body').addClass('scrollOff');

    });

    //개인정보취급방침 닫기 버튼 클릭시
    $('.close_personal_btn').click(function(){

        $('.personal_popup_ex').fadeOut();
        $('body').removeClass('scrollOff');

    });

    //서브페이지 이미지 효과
    $('.sub_visual_image').addClass('on');

});