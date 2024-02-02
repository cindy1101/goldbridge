//비주얼 호버효과
$(document).ready(function() {
 // 윈도우 리사이즈 이벤트를 사용하여 뷰포트 너비를 모니터링
 if ($(window).width() > 769) {
     // 769px 이상인 경우 스크립트 실행
     $('.common_visual').hover(function(){
         $('.common_visual_title').stop().fadeOut();
         $('.visual_active_ex').stop().fadeIn();
     },
     function(){
         $('.visual_active_ex').stop().fadeOut();
         $('.common_visual_title').stop().fadeIn();
     });} 
     
     else {
         // 769px 이하인 경우 스크립트 비활성화
         $('.common_visual').off('mouseenter mouseleave');
     }

     // 초기 로딩 시 체크
     if ($(window).width() <= 769) {
         $('.common_visual').off('mouseenter mouseleave');
     }
 });