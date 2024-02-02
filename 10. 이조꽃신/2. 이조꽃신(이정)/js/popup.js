//이메일주소무단수집거부 팝업
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