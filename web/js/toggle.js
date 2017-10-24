require(['jquery', 'jquery/ui'], function($){
  
  //navigation toggle
  jQuery('.nav-toggle').click(function (event) {
    jQuery(this).toggleClass('fa-close');
    jQuery('.nav-sections-item-content ul').toggleClass('open');
  });

  // sidebar toggle
  jQuery('.filter-options-title').click(function (event) {
    jQuery(this).toggleClass('open');
  });
  
});
