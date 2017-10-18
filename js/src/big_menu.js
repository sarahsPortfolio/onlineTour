// main.js
(function($){
  // $('.menu_btn').on('click', funciton(e){
  //   e.preventDefault();
  //   $('.big_menu').addClass('open');
  // });

  $('.menu_btn').on('click', function(e){
    e.preventDefault();
    $('.big_menu').addClass('open');
  });

   $('.btn').on('click', function(e){
    e.preventDefault();
    $('.big_menu').removeClass('open');
  });

})(this.jQuery);