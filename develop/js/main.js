var Attitude = {
  instances: {},
  variables: {},

  init: function() {
    'use strict';

    Attitude.toggleMenu();
    Attitude.banner();
  },
  toggleMenu: function() {
    'use strict';

    $('#btn-menu').click(function() {
      $(this).toggleClass('opened');
      $('#main-navigation').toggleClass('active');
    });
  },
  banner: function() {
    'use strict';

    $('.main-banner').slick({
      lazyLoad: 'ondemand',
      slidesToShow: 1,
      infinite: true,
      mobileFirst: true,
      centerMode: true,
      centerPadding: '2rem',

      responsive: [
        {
          breakpoint: 900,
          settings: {
            centerMode: false,
            fade: true,
            cssEase: 'linear',
            autoplay: true
          }
        }
      ]
    });
  }
}
$(document).ready(function() {
  'use strict';

  Attitude.init();
});
