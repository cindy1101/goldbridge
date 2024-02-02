let headerWrap = $('.mobile_header_wrap');
let headerOpenBtn = $('.mobile_header_open_btn');
let headerCloseBtn = $('.mobile_header_close_btn');
let mobileSheet = $('.mobile_header_sheet');
let windowWidth = $(window).outerWidth();

function mobileHeaderJs(){

    if(windowWidth <= 1024){

        headerOpenBtn.click(function(){
    
            mobileSheet.addClass('on');
            headerWrap.addClass('on');
            $('body').addClass("scrollOff");
    
        });//열기 버튼 클릭할 때
    
        headerCloseBtn.click(function(){
    
            mobileSheet.removeClass('on');
            headerWrap.removeClass('on');
            $('body').removeClass("scrollOff");
    
        });//닫기 버튼 클릭할 때
    
    }
}


$(document).ready(function(){

    mobileHeaderJs();

    $(window).resize(function(){
        mobileHeaderJs();
        
        // 너비가 1025px 이상이면 스크롤 해제
        if ($(window).outerWidth() > 1024) {
            $('body').removeClass("scrollOff");
        }
    });

});