//광고성 개인정보 수집  
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

//광고성 개인정보 수집  
$(function(){
    
    $("#open_privacy_ex").click(function(){
        $('body').addClass('scrollOff').on('scroll touchmove mousewheel', function(e){
        e.preventDefault();});
        $("#privacy_ex").fadeIn(100);
        const body = document.querySelector('body');
        body.style.overflowY = 'hidden'
    });

    $("#close_privacy_ex").click(function(){
        $('body').removeClass('scrollOff').off('scroll touchmove mousewheel'); 
        modalClose(); 
        const body = document.querySelector('body');
        body.style.overflowY = 'scroll'
    });

    function modalClose(){
    $("#privacy_ex").fadeOut(100);}

});