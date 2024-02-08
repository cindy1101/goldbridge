  

  // 비주얼 배너 슬라이드
  $(document).ready(function(){
      var VisualslideCount = $('.visual_product').length;
      var Visualautoplay = (VisualslideCount > 1) ? true : false;
  
      $('.visual_banner_web').owlCarousel({
        center: true,
        items: 2,
        loop: Visualautoplay, //자동으로 돌아간다.
        autoplay: Visualautoplay,
        autoplayHoverPause: true,
        responsive: {
          0: {
            items: 1.1,
            margin: 15
          },
          768: {
            items: 1.5,
            margin: 25
          },
          1024: {
            items: 1.5,
            margin: 40
          },
          1420: {
            items: 1.5,
            margin: 50
          }
        }
      });
  });

  //쿠폰 슬라이더
  $(document).ready(function(){
      $('.coupon_slider').owlCarousel({
        loop: true,
        items: 1,
        margin: 0,
        nav: false,
        dots: false,
        autoplayTimeout: 3000,
        autoplay: true,
        responsive: {
          600: {
            margin: 30,
            items: 2
          },
          1024: {
            margin: 30,
            items: 3,
          },
          1420: {
            margin: 0,
            items: 1
          }
        }
      })
    });

  // 로맨틱 허니문 호버효과 
  $(function () {
  // 초기 로드 시에도 첫 번째 요소에 효과를 적용
  $('.romentic_honeymoon > div:first-child').css('width', '30%').css('box-shadow', '6px 6px 6px 2px rgba(0, 0, 0, 0.15)');
  $('.romentic_honeymoon > div:first-child img').css('filter', 'brightness(50%)');
  $('.romentic_honeymoon > div:first-child .romentic_honeymoon_text').stop().css('bottom', '0');
  $('.romentic_honeymoon > div:first-child h3.no_active_title').css('display', 'none');

  $('.romentic_honeymoon > div').each(function (index, element) {
      // 호버 이벤트 처리
      $(element).hover(function () {
      // 호버된 요소 정의
      $(this).css('width', '30%').css('box-shadow', '6px 6px 6px 2px rgba(0, 0, 0, 0.15)');

      //호버 안된 요소 정의
      $('.romentic_honeymoon > div:not(:eq(' + index + '))').css('width', '16%').css('box-shadow', '');

      $(this).find('img').css('filter', 'brightness(50%)');
      $('.romentic_honeymoon > div:not(:eq(' + index + '))').find('img').css('filter', '');

      $(this).find('.romentic_honeymoon_text').stop().css('bottom', '0');
      $('.romentic_honeymoon > div:not(:eq(' + index + '))').find('.romentic_honeymoon_text').stop().css('bottom', '-100%');

      $(this).find(' h3.no_active_title').css('display', 'none');
      $('.romentic_honeymoon > div:not(:eq(' + index + '))').find('h3.no_active_title').stop().fadeIn();

      // 이벤트 버블링 방지
      event.stopPropagation();
      });
  });
  });

  //로맨틱 허니문 슬라이드
  $(document).ready(function(){
      $('.romentic_honeymoon_slider').owlCarousel({
          loop: true,
          margin: 44,
          nav: false,
          dots: false,
          autoplayTimeout: 3000,
          autoplay: true,
          responsive: {
            0: {
              items: 1
            },
            600: {
              margin: 20,
              items: 2
            },
            768: {
              margin: 20,
              items: 3
            },
            1274: {
              margin: 30,
              items: 4
            }
          }
        });
  });
  
  //러블리 허니문1
  $(document).ready(function(){
      $('.content_box_01').owlCarousel({
          margin: 44,
          loop: true,
          nav: false,
          dots: false,
          autoplayTimeout: 3000,
          autoplay: true,
          responsive: {
            0: {
              items: 1
            },
            600: {
              margin: 20,
              items: 2
            },
            768: {
              margin: 20,
              items: 3
            },
            1274: {
              margin: 30,
              items: 4
            }
          }
      });
  });

    

  //러블리 허니문2
  $(document).ready(function(){
      $('.content_box_02').owlCarousel({
          margin: 44,
          loop: true,
          nav: false,
          dots: false,
          autoplayTimeout: 3000,
          autoplay: true,
          responsive: {
            0: {
              items: 1
            },
            600: {
              margin: 20,
              items: 2
            },
            768: {
              margin: 20,
              items: 3
            },
            1274: {
              margin: 30,
              items: 4
            }
          }
      });
      
  });

  //러블리 허니문3
  $(document).ready(function(){
      $('.content_box_03').owlCarousel({
          margin: 44,
          loop: true,
          nav: false,
          dots: false,
          autoplayTimeout: 3000,
          autoplay: true,
          responsive: {
            0: {
              items: 1
            },
            600: {
              margin: 20,
              items: 2
            },
            768: {
              margin: 20,
              items: 3
            },
            1274: {
              margin: 30,
              items: 4
            }
          }
        });
  });
    

  //러블리 허니문4
  $(document).ready(function(){
      $('.content_box_04').owlCarousel({
          margin: 44,
          loop: true,
          nav: false,
          dots: false,
          autoplayTimeout: 3000,
          autoplay: true,
          responsive: {
            0: {
              items: 1
            },
            600: {
              margin: 20,
              items: 2
            },
            768: {
              margin: 20,
              items: 3
            },
            1274: {
              margin: 30,
              items: 4
            }
          }
        });
  });
    

  
  