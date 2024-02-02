 //header IOS 크롬에서 볼 때 크기 조절
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', vh+"px");
// resize
window.addEventListener("resize", ()=>{
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', vh+"px");
});

 // 헤더 체크박스 관련 제어 >> 웹
function WebHeader() {

    $('.web_header_chk_box').change(function() {
        if ($(this).is(':checked')) {
            $('.web_header_chk_box').not(this).prop('checked', false);
        }
    });


    $("#header_web_all_chk").on("change", function() {

        if($(window).outerWidth() >= 1025){

            if ($(this).is(":checked")) {
                // 체크가 되었을 때, 스르륵 나타내기
                $(".header_full_menu_sheet_ex").slideDown(500);
                $(".family_sheet_web").slideUp(500);
            } else {
                // 체크가 해제되었을 때, 스르륵 사라지게 하기
                $(".header_full_menu_sheet_ex").slideUp(500);
            }
        }
    });


    $("#famliy_site_web").on("change", function() {

    if($(window).outerWidth() >= 1025){
        if ($(this).is(":checked")) {
            // 체크가 되었을 때, 스르륵 나타내기
            $(".family_sheet_web").slideDown(500);
            $(".header_full_menu_sheet_ex").slideUp(500);
        } else {
            // 체크가 해제되었을 때, 스르륵 사라지게 하기
            $(".family_sheet_web").slideUp(500);
        }
    }
    });
}


// 헤더 체크박스 관련 제어 >> 모바일
function MobileHeader() {

    $('#mobile_sheet_open').change(function() {
        if ($(this).is(':checked')) {
            $('body').addClass('scrollfixed');
        }else{
            $('body').removeClass('scrollfixed');
        }
    });

    if($(window).outerWidth() >= 1025){
            $('#mobile_sheet_open').prop('checked', false);
            $('body').removeClass('scrollfixed');
    }

    $('.mobile_lnb_menu').change(function() {
        if ($(this).is(':checked')) {
            $('.mobile_lnb_menu').not(this).prop('checked', false);
        }
    });

}

$(document).ready(function(){

    WebHeader();
    MobileHeader();
   
    $(window).on('resize', function(){

        WebHeader();
        MobileHeader();
       
    });

});