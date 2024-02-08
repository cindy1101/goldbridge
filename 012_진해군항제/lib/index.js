 // 헤더
 function openHeader(){

    $('.header_sheet').addClass('on');
    $('body').addClass('scrollOff');

}

function closeHeader(){

    $('.header_sheet').removeClass('on');
    $('body').removeClass('scrollOff');

}

// 이용약관
function openTerms() {

    $('body').addClass('scrollOff');
    $('.terms_of_use_ex').fadeIn(300);

}


function closeTerms() {

    $('body').removeClass('scrollOff');
    $('.terms_of_use_ex').fadeOut(300);

}

// 개인정보처리방침
function openPrivacy() {

    $('body').addClass('scrollOff');
    $('.privacy_ex').fadeIn(300);

}


function closePrivacy() {

    $('body').removeClass('scrollOff');
    $('.privacy_ex').fadeOut(300);

}

// 회원탈퇴
function openSecession() {

    $('body').addClass('scrollOff');
    $('.secession_ex').fadeIn(300);

}

function closeSecession() {

    $('body').removeClass('scrollOff');
    location.replace('index.html');

}

// 설문조사 폼
function openSurvey() {
    $('body').addClass('scrollOff');
    $('.survey_form').fadeIn(300);
}

function closeSurvey() {
    $('body').removeClass('scrollOff');
    $('.survey_form').fadeOut(300);
}

// 설문조사 완료 
function openSurveySubmit(){

    $('.survey_form').fadeOut(300);
    $('.survey_submit_popup').fadeIn(300);

}

function closeSurveySubmit(){

    $('.survey_submit_popup').fadeOut(300);
    $('body').removeClass('scrollOff');

}

// 실시간 현황 CCTV select 및 페이지 보여지는 부분
function clickViedoMenu(){

    $('.click_cctv_menu').slideToggle(300);

    $('.cctv_cont_select_box_total_min img').toggleClass('on');

    $('.click_cctv_menu li').click(function(){

        let clickMenuCctv = $(this).index();

        $('.total_cctv_video_box div').each(function(){

            let showVideo = $(this).index();

            if(clickMenuCctv === showVideo){
                $(this).show();
            }else{
                $(this).hide();
            }

        });

        $('.click_cctv_menu').slideUp(300);
        $('.cctv_cont_select_box_total_min img').removeClass('on');

        let videoText = $(this).text();

        $('.cctv_cont_select_box_total_min p').text(videoText);

    });

}

// 행사 일정 정보
function eventInpormation() {

    $('.event_detaile_select_inpormation').addClass('on');
    $('.event_detaile_select_tour').removeClass('on');
    $('.event_inpormation_ex').css({'display':'block'});
    $('.event_tour_ex').css({'display':'none'});

}

// 행사 일정
function eventTour() {

    $('.event_detaile_select_inpormation').removeClass('on');
    $('.event_detaile_select_tour').addClass('on');
    $('.event_inpormation_ex').css({'display':'none'});
    $('.event_tour_ex').css({'display':'block'});

}