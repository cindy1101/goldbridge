//헤더 풀메뉴
$(document).on('mouseover', '.header_middle', function() {
    $('.dept01').stop().slideDown(300);
});
$(document).on('mouseleave', 'div', function () {
    if ($(this).hasClass('header_middle')) {
        $('.dept01').stop().slideUp(300);
    }
});


//header IOS 크롬에서 볼 때 크기 조절
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', vh+"px");
// resize
window.addEventListener("resize", ()=>{
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', vh+"px");
});


//header 메뉴 체크시 움직이지 않게
$(document).ready(function() {
    $("#header_open").on('click', function() {
        if ( $(this).prop('checked') && window.innerWidth <= 1024) {
            $(this).parent().addClass("scrollOff");
        } else {
            $(this).parent().removeClass("scrollOff");
        }
        });
});

//이메일 무단 수집
$(function(){
            
    $("#open_emaile").click(function(){
        $('body').addClass('scrollOff').on('scroll touchmove mousewheel', function(e){
        e.preventDefault();});
        $("#emaile").fadeIn(100);
        const body = document.querySelector('body');
        body.style.overflowY = 'hidden'
    });

    $("#close_emaile").click(function(){
        $('body').removeClass('scrollOff').off('scroll touchmove mousewheel'); 
        modalClose(); 
        const body = document.querySelector('body');
        body.style.overflowY = 'scroll'
    });

    function modalClose(){
    $("#emaile").fadeOut(100);}

});

//개인정보처리방침
$(function(){
    
    $("#open_privacy").click(function(){
        $('body').addClass('scrollOff').on('scroll touchmove mousewheel', function(e){
        e.preventDefault();});
        $("#privacy").fadeIn(100);
        const body = document.querySelector('body');
        body.style.overflowY = 'hidden'
    });

    $("#close_privacy").click(function(){
        $('body').removeClass('scrollOff').off('scroll touchmove mousewheel'); 
        modalClose(); 
        const body = document.querySelector('body');
        body.style.overflowY = 'scroll'
    });

    function modalClose(){
    $("#privacy").fadeOut(100);}

});







