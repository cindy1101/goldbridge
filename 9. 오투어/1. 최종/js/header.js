 // 모바일 헤더토글 및 스크롤막기
 $(document).ready(function () {
    $('input[id="mobile_header_open"]').change(function () {
    if ($(this).is(':checked')) {
        $('.mobile_header_dimd').fadeIn();
        const body = document.querySelector('body');
        body.style.overflowY = 'hidden'
    } else {
        $('.mobile_header_dimd').fadeOut();
        const body = document.querySelector('body');
        body.style.overflowY = 'scroll'
    }
    });
});

//모바일 서브메뉴 체크 시 하나만 오픈
$('.lnb_chk').change(function () {
if ($(this).is(':checked')) {
    $('.lnb_chk').not(this).prop('checked', false);
}
});

//PC헤더 네비게이션 시트 슬라이드 다운
$(document).ready(function(){
    $('.lnb_header>li').mouseenter(function(){
        $('.total_nav_sheet').stop().slideDown();
    });

    $('.lnb_header>li').mouseleave(function(){
        $('.total_nav_sheet').stop().slideUp();
    });

    $('.total_nav_sheet').mouseenter(function(){
        $(this).stop().slideDown();
    });

    $('.total_nav_sheet').mouseleave(function(){
        $(this).stop().slideUp();
    });
});