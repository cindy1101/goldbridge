
//스크롤할 때 나타난다, bottom menu가
$(window).scroll(function(){
    if($(window).scrollTop()>$("#bottom_menu_display").scrollTop())
                {$(".bottom_menu").animate({bottom:0},300);
        }
});


//이용약관, footer
$(function(){

    $("#popup_open_01").click(function(){
        $('body').addClass('scrollOff').on('scroll touchmove mousewheel', function(e){
        e.preventDefault();});     
        $("#popup_join_02").fadeIn(100);
        $("#terms_content").delay(100).animate({bottom:0},500);
        const body = document.querySelector('body');
        body.style.overflowY = 'hidden'
    });

    $("#terms_close").click(function(){
        modalClose();
        $('body').removeClass('scrollOff').off('scroll touchmove mousewheel'); 
        const body = document.querySelector('body');
        body.style.overflowY = 'scroll'
    });

    function modalClose(){
    $("#terms_content").animate({bottom:-775.2},500);
    $("#popup_join_02").delay(500).fadeOut(100);}

});

//개인정보처리방침, footer
$(function(){

        $("#popup_open_02").click(function(){      
            $('body').addClass('scrollOff').on('scroll touchmove mousewheel', function(e){
            e.preventDefault();}); 
            $("#popup_join_01").fadeIn(100);
            $("#privacy_content").delay(100).animate({bottom:0},500);
            const body = document.querySelector('body');
            body.style.overflowY = 'hidden'
        });

        $("#privacy_close").click(function(){
            $('body').removeClass('scrollOff').off('scroll touchmove mousewheel'); 
            modalClose(); 
            const body = document.querySelector('body');
            body.style.overflowY = 'scroll'
        });

        function modalClose(){
        $("#privacy_content").animate({bottom:-775.2},500);
        $("#popup_join_01").delay(500).fadeOut(100);}

    });


$(function(){
    //쿠폰 받기 클릭시 나오는 쿠폰, 해당 상품의 디테일 페이지들
    $("#free_popup_open").click(function(){  
        $('body').addClass('scrollOff').on('scroll touchmove mousewheel', function(e){
        e.preventDefault();});     
        $("#free_popup_ex").fadeIn(100);
        const body = document.querySelector('body');
        body.style.overflowY = 'hidden'
    });

    $("#popup_free_close").click(function(){
        modalClose(); 
        $('body').removeClass('scrollOff').off('scroll touchmove mousewheel'); 
        const body = document.querySelector('body');
        body.style.overflowY = 'scroll'
    });

    function modalClose(){
    $("#free_popup_ex").fadeOut(100);}

});


//나물밥 메인, 나물밥 디테일 페이지, 오징어 메인 페이지, 담금주 디테일 페이지, 오징어 디테일 페이지 height 계산해서 지정하는 것
window.onload = function()
{setDivHeight('back','product');}
function setDivHeight(objSet, objTar)
{
var objSet   = document.getElementById(objSet);
var objTarHeight= document.getElementById(objTar).offsetHeight;
objSet.style.height  = objTarHeight + "px";
}

$(function(){
    
    //회원가입시 개인정보 약관 → 기수회원
    $("#menu_01").click(function(){      
        $('body').addClass('scrollOff').on('scroll touchmove mousewheel', function(e){
        e.preventDefault();}); 
        $("#popup_join_01").fadeIn(100);
        $("#privacy_content").delay(100).animate({bottom:0},500);
        const body = document.querySelector('body');
        body.style.overflowY = 'hidden'
    });

    $("#privacy_close").click(function(){
        $('body').removeClass('scrollOff').off('scroll touchmove mousewheel'); 
        modalClose(); 
        const body = document.querySelector('body');
        body.style.overflowY = 'scroll'
    });

    function modalClose(){
    $("#privacy_content").animate({bottom:-775.2},500);
    $("#popup_join_01").delay(500).fadeOut(100);}

});

$(function(){
    
    //회원가입 이용약관 → 기수회원
    $("#menu_02").click(function(){
        $('body').addClass('scrollOff').on('scroll touchmove mousewheel', function(e){
        e.preventDefault();});     
        $("#popup_join_02").fadeIn(100);
        $("#terms_content").delay(100).animate({bottom:0},500);
        const body = document.querySelector('body');
        body.style.overflowY = 'hidden'
    });

    $("#terms_close").click(function(){
        modalClose();
        $('body').removeClass('scrollOff').off('scroll touchmove mousewheel'); 
        const body = document.querySelector('body');
        body.style.overflowY = 'scroll'
    });

    function modalClose(){
    $("#terms_content").animate({bottom:-775.2},500);
    $("#popup_join_02").delay(500).fadeOut(100);}

});

$(function(){
    
    //회원가입시 개인정보 → 일반회원
    $("#menu_03").click(function(){      
        $('body').addClass('scrollOff').on('scroll touchmove mousewheel', function(e){
        e.preventDefault();}); 
        $("#popup_join_01").fadeIn(100);
        $("#privacy_content").delay(100).animate({bottom:0},500);
        const body = document.querySelector('body');
        body.style.overflowY = 'hidden'
    });

    $("#privacy_close").click(function(){
        $('body').removeClass('scrollOff').off('scroll touchmove mousewheel'); 
        modalClose(); 
        const body = document.querySelector('body');
        body.style.overflowY = 'scroll'
    });

    function modalClose(){
    $("#privacy_content").animate({bottom:-775.2},500);
    $("#popup_join_01").delay(500).fadeOut(100);}

});

$(function(){
    
    //회원가입시 이용약관 → 일반회원
    $("#menu_04").click(function(){
        $('body').addClass('scrollOff').on('scroll touchmove mousewheel', function(e){
        e.preventDefault();});     
        $("#popup_join_02").fadeIn(100);
        $("#terms_content").delay(100).animate({bottom:0},500);
        const body = document.querySelector('body');
        body.style.overflowY = 'hidden'
    });

    $("#terms_close").click(function(){
        modalClose();
        $('body').removeClass('scrollOff').off('scroll touchmove mousewheel'); 
        const body = document.querySelector('body');
        body.style.overflowY = 'scroll'
    });

    function modalClose(){
    $("#terms_content").animate({bottom:-775.2},500);
    $("#popup_join_02").delay(500).fadeOut(100);}

});

