//엑셀 다운로드
$(function(){
    
    $("#open_download").click(function(){
        $('body').addClass('scrollOff').on('scroll touchmove mousewheel', function(e){
        e.preventDefault();});
        $("#download").fadeIn(100);
        const body = document.querySelector('body');
        body.style.overflowY = 'hidden'
    });

    $("#close_download").click(function(){
        $('body').removeClass('scrollOff').off('scroll touchmove mousewheel'); 
        modalClose(); 
        const body = document.querySelector('body');
        body.style.overflowY = 'scroll'
    });

    function modalClose(){
    $("#download").fadeOut(100);}

});
