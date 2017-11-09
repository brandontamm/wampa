require(['jquery', 'jquery/ui', 'domReady'], function($){

  function toggles() {

    //navigation toggle
    jQuery('.nav-toggle').click(function ( event ) {
      // event.preventDefault();
      jQuery(this).toggleClass('fa-close');
      jQuery('.nav-sections-item-content ul').toggleClass('open');
    });

    // sidebar toggle
    jQuery('dt.filter-options-title').click(function ( event ) {
      // event.preventDefault();
      jQuery(this).toggleClass('open');
    });
  
    // small screen shop by category toggle
    jQuery('.block.filter .filter-title').click(function ( event ) {
      // event.preventDefault();
      jQuery('.block-content').toggleClass('active');
    });
  
    // category small screen overlay close toggle
    jQuery('.block.filter .filter-subtitle').click(function ( event ) {
      // event.preventDefault();
      jQuery(this).parent().toggleClass('active');
    });
  }

  setTimeout(toggles, 6000);
  
});
