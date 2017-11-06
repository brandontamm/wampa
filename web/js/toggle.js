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

  // small screen shop by category toggle
  jQuery('.block.filter .filter-title').click(function (event) {
    jQuery('.block-content').toggleClass('active');
  });

  // category small screen overlay close toggle
  jQuery('.block.filter .filter-subtitle').click(function (event) {
    jQuery(this).parent().toggleClass('active');
  });
  
});
