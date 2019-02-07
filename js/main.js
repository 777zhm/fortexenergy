(function($) {
$(document).ready(function() {

// Start Main menu navigation
function openOverlay() {
	$('#burger_nav').css("width", "100%");
};

function closeOverlay() {
	$('#burger_nav').css("width", "0%");
};

$('#burger_icon_box').click(function(){
	openOverlay();

	setTimeout(function() {
		closeOverlay();
	}, 20000);

});

$('#burger_icon_close').click(function(){
	closeOverlay();
});

$('.overlay_menu a').click(function(){
	closeOverlay();
});

// End Main menu navigation





}); //document.ready

})( jQuery );