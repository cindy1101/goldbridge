 // 풀페이지js
 $(function() {
    var page = $('.fullpage').fullpage({

        // 1. 네비게이션 보이기
        navigation : true,
        //navigationTooltips: ['MAIN', 'BUSINESS', 'PORTFOLIO', 'ABOUT US', 'FOOTER'],
        //anchors: ['section1', 'section2', 'section3', 'section4','section5'],
        
        // 2. 네비게이션 위치 지정
        navigationPosition : 'left',
        showActiveTooltip : true ,

        // 일반 스크롤을 사용하려는 섹션의 클래스 또는 ID를 normalScrollElements에 추가합니다.
        normalScrollElements: ".normal-scroll-section",
        
        // 특정 인덱스일 때
		'afterLoad': function (anchorLink, index) {
			if (index == 3){
                $('.fp-tooltip').css('color', '#333');
                $('#fp-nav ul li a span').css('background', '#333');
                $('.fp-slidesNav ul li a span').css('background', '#333');
                $('.scroll_down_text').css('color', '#333');
                $('.scroll_down_ex').css('display', 'block');
                $('.scroll_down_arrow').css('color', '#333');
            }else if(index == 2){
                $('.fp-tooltip').css('color', '#333');
                $('#fp-nav ul li a span').css('background', '#333');
                $('.fp-slidesNav ul li a span').css('background', '#333');
                $('.scroll_down_text').css('color', '#333');
                $('.scroll_down_ex').css('display', 'block');
                $('.scroll_down_arrow').css('color', '#333');
            }else if(index == 1){
                $('.fp-tooltip').css('color', '#fff');
                $('#fp-nav ul li a span').css('background', '#fff');
                $('.fp-slidesNav ul li a span').css('background', '#fff');
                $('.scroll_down_text').css('color', '#fff');
                $('.scroll_down_ex').css('display', 'block');
                $('.scroll_down_arrow').css('color', '#fff');
            }
            else if(index == 4){
                $('.fp-tooltip').css('color', '#333');
                $('#fp-nav ul li a span').css('background', '#333');
                $('.fp-slidesNav ul li a span').css('background', '#333');
                $('.scroll_down_text').css('color', '#333');
                $('.scroll_down_arrow').css('color', '#333');
                $('.scroll_down_ex').css('display', 'block');
            } else if(index == 5){
              $('.fp-tooltip').css('color', '#333');
              $('#fp-nav ul li a span').css('background', '#333');
              $('.fp-slidesNav ul li a span').css('background', '#333');
              $('.scroll_down_text').css('color', '#333');
              $('.scroll_down_arrow').css('color', '#333');
              $('.scroll_down_ex').css('display', 'block');
          }else if(index == 6){
              $('.fp-tooltip').css('color', '#fff');
              $('#fp-nav ul li a span').css('background', '#fff');
              $('.fp-slidesNav ul li a span').css('background', '#fff');
              $('.scroll_down_text').css('color', '#fff');
              $('.scroll_down_arrow').css('color', '#fff');
              $('.scroll_down_ex').css('display', 'block');
          }else if(index == 7){
                $('.scroll_down_ex').css('display', 'none');
            }
		},	
 

	
    });
});

// 비주얼 배너 슬라이드
$(document).ready(function(){
    var VisualslideCount = $('.visual_product').length;
    var Visualautoplay = (VisualslideCount > 1) ? true : false;

    $('.visual_banner_web').owlCarousel({
    center: true,
    items: 1,
    video:true,
    merge:true,
    nav:true,
    dots:true,
    loop: Visualautoplay, //자동으로 돌아간다.
    autoplay: Visualautoplay,
    autoplayHoverPause: true,
            autoplayTimeout: 3000,

    });
    
});

// NOW 슬라이드
$(document).ready(function(){
    var VisualslideCount = $('.now_product').length;
    var Visualautoplay = (VisualslideCount > 1) ? true : false;

    $('.now_slider_web').owlCarousel({
    //center: true,
    items: 5,
    margin:60,
    video:true,
    merge:true,
    nav:false,
    dots:false,
    loop: Visualautoplay, //자동으로 돌아간다.
    autoplay: Visualautoplay,
    autoplayHoverPause: true,
    });
    
});


//어바웃 탭버튼
$(document).ready(function () {
  // 초기 상태 설정
  updateSheets();

  $('.about_btn').change(function () {
    updateSheets();
  });

  function updateSheets() {
    if ($('#vision_btn').is(':checked')) {
      $('.about_sheet_01').fadeIn();
      $('.about_sheet_02, .about_sheet_03').fadeOut();
    } else if ($('#history_btn').is(':checked')) {
      $('.about_sheet_02').fadeIn();
      $('.about_sheet_01, .about_sheet_03').fadeOut();
    } else if ($('#organization_btn').is(':checked')) {
      $('.about_sheet_03').fadeIn();
      $('.about_sheet_01, .about_sheet_02').fadeOut();
    }
  }
});

//어바웃 이미지
$(document).ready(function() {
  const $movingImage = $('.movingImage');
  
  $(document).on('mousemove', function(event) {
      // 아주 살짝 움직이기 위해 마우스 커서 위치에 따라 이미지의 위치를 조정합니다.
      const offsetX = (event.clientX - window.innerWidth / 2) / 50;
      const offsetY = (event.clientY - window.innerHeight / 2) / 50;

      // 이미지의 위치를 조정합니다.
      $movingImage.css({
          transform: `translate(${offsetX}px, ${offsetY}px)`
      });
  });
});