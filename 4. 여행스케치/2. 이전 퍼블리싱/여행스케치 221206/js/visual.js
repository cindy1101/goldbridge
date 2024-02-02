const swiper = new Swiper('.swiper', {
    // Optional parameters

    autoplay: {
	    //시간 1000 이 1초
	  delay: 5000,
	  disableOnInteraction: false,
	   },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });