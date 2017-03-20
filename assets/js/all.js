jQuery(document).ready(function($){
    // to keep footer fixed at the bottom
    updateFooter();

    $(window).resize(function(){ // On resize
        updateFooter();
    });

    var scrollTop = 0;
    $(window).scroll(function(){
        scrollTop = $(window).scrollTop();
        if (scrollTop >= 60) {
            $('#fixed-top').addClass('scrolled-nav');
        } else if (scrollTop < 60) {
            $('#fixed-top').removeClass('scrolled-nav');
        }
    });
});

function updateFooter() {
    //var height_diff = ( $( window ).height() - $( 'header' ).outerHeight() - $( '#content' ).outerHeight());
    var height_diff = ( $( window ).height() - $( '#content' ).outerHeight());
    var footer_height = $( 'footer.main-footer' ).outerHeight();
    var change = height_diff - footer_height;
    if ( change > 0 ) { $( 'footer.main-footer' ).css( 'margin-top', change ); }
}
