require(['jquery', 'jquery/ui'], function($){
  
  //navigation toggle
  $('.nav-toggle').click(function () {
    $(this).toggleClass('fa-close');
    $('.nav-sections-item-content ul').toggleClass('open');
  });

  // sidebar toggle
  $('.filter-options-title').click(function () {
    $(this).toggleClass('open');
    console.log('hit');
  });
  
});
