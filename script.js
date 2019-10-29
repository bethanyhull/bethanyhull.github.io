
    var breakpoint1 = 780;


      $(".vertical-center-4").slick({
        slidesToShow: 3,

        vertical: true,
        focusOnSelect: true,
        autoplay: false,
        centerMode: true,
        asNavFor: ".vertical-center",
        // responsive: [{
        //
        //   breakpoint:breakpoint1,
        //   settings: {
        //     vertical: false,
        //     verticalSwipe: false,
        //     swipe: true,
        //     slidesToShow: 3,
        //     slidesToScroll: 1,
        //
        //   }
        // }]

      });

      $(".vertical-center").slick({
        dots: false,
        vertical: true,
        speed: 500,
        fade:true,
        cssEase: 'linear',
        arrows: false,
        accessability: true,
        slidesToShow: 1,

        // responsive: [{
        //
        //   breakpoint: breakpoint1,
        //   settings: {
        //     vertical: false,
        //     verticalSwipe: false,
        //   }
        //
        // }]
      });
