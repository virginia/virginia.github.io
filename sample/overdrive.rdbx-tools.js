var initToolbar = function(rdbxToolbar) {

  var $pnlContainer = $('#rdbx-pnl-container');
  var $toolbar = $('#rdbx-toolbar');
  var $shareBtn = $('.rdbx-btn-share');
  var $slides = $('.rdbx-pnl');


  var setupRail = function() {
    var $rail = $('.rdbx-pnl-rail');
    var slidesQty = $slides.length;
    $rail.css({
      'width': $toolbar.outerWidth() * slidesQty
    });
  };


  var invokeSharePnl = function() {
    $('#rdbx-btn-share').on('click', function() {
      $pnlContainer.toggleClass('rdbx-pnl-container-show');
      $shareBtn.toggleClass('active');
      $pnlContainer.find('.rdbx-pnl').removeClass('rdbx-pnl-show');

      setTimeout(function() {
        $pnlContainer.find('.rdbx-pnl:first-child').addClass('rdbx-pnl-show');
      }, 100);

      $pnlContainer.css({
        'bottom': $toolbar.outerHeight(),
        'height': $('.rdbx-pnl:first-child').outerHeight() + $toolbar.outerHeight()
      });
    });
  };


  var nxtPnl = function() {
    $('.rdbx-pnl-nxt').on('click', function() {
      $nxtSlide = $(this).closest('.rdbx-pnl').next();
      $actvSlide = $(this).closest('.rdbx-pnl');
      $actvSlide.removeClass('rdbx-pnl-show');
      $nxtSlide.addClass('rdbx-pnl-show');
    });
  };


  var prvPnl = function() {
    $('.rdbx-pnl-prv').on('click', function() {
      $prvSlide = $(this).parent().prev();
      $actvSlide = $(this).parent();
      $actvSlide.removeClass('rdbx-pnl-show');
      $prvSlide.addClass('rdbx-pnl-show');
    });
  };


  var clsPnl = function() {
    $('.rdbx-pnl-cls').on('click', function() {
      $pnlContainer.toggleClass('rdbx-pnl-container-show');
      setTimeout(function() {
        $slides.removeClass('rdbx-pnl-show');
      }, 500);
      $shareBtn.toggleClass('active');
    });
  };


  setupRail();
  invokeSharePnl();
  nxtPnl();
  prvPnl();
  clsPnl();

};
