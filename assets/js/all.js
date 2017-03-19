jQuery(document).ready(function($){
    // to keep footer fixed at the bottom
    updateFooter();
});

function updateFooter() {
    var height_diff = ( $( window ).height() - $( 'header' ).outerHeight() - $( '#content' ).outerHeight());
    var footer_height = $( 'footer.main-footer' ).outerHeight();
    var change = height_diff - footer_height;
    if ( change > 0 ) { $( 'footer.main-footer' ).css( 'margin-top', change ); }
}

$(function(){
    $(window).resize(function(){ // On resize
        updateFooter();
    });
});
