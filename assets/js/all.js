jQuery(document).ready(function($){
    // to keep footer fixed at the bottom
    var height_diff = $( window ).height() - $( 'body' ).height();
    if ( height_diff > 0 ) { $( 'footer.main-footer' ).css( 'margin-top', height_diff ); }
});
