//서브 페이지 루트 스르륵 네비게이션 내려오게, 루트 클릭시 로테이션 효과
function rootDepth() {

    $('.sub_visual_depth_cont').slideToggle(200);
    $('.sub_visual_depth_title > img').toggleClass('on');

}

//검색 select 박스 글 값 받기
function searchSelect(){

    $('.search_select_box li').click(function(){

        let selectText = $(this).find('p').text();
        $('.search_select_title > p').text(selectText);

    });

}

//셀렉박스 검색
function searchSelectSlide(){

    $('#slideselect').slideToggle(200);
    $('.search_select_title > img').toggleClass('on');


}


$(document).ready(function(){

    searchSelect();

});