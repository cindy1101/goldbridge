//회원사 검색 테이블 형식에 이미지 alt 속성 가변제어
$('.member_table_title').each(function(index) {
    var text = $(this).text(); 
    $('.link_img').eq(index).attr('alt' , text + ' 홈페이지 바로가기 버튼'); 
});

//회원사 검색 카드형식에 이미지 alt 속성 가변제어
/*$('.member_title').each(function(index) {

    const memberImg = "img/alternate_img.png";

    if(memberImg === "img/alternate_img.png"){
        $('.member_img').eq(index).attr('alt' ,' 대체 이미지'); 
    }else if(memberImg !== "img/alternate_img.png"){
        var text = $(this).text(); 
        $('.member_img').eq(index).attr('alt' , text + ' 대표 이미지'); 
    }

 
});*/

//회원사 검색 카드형식에 이미지 alt 속성 가변제어
$('.member_title').each(function(index){
    const memberImg = $('.member_img').eq(index).attr('src');
    let altText;
    
    if (memberImg === "img/alternate_img.png"){
      altText = "대체 이미지";
    } else {
      altText = $(this).text() + " 대표 이미지";
    }
  
    $('.member_img').eq(index).attr('alt' , altText);
  });
  
  



