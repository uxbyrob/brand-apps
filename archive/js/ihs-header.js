/// Script to control link from header logo area to go back to home page

$(function() {

	$(".brand").click( function() {
	    window.location = $(this).attr("data-href"); 
	    return false;
	});

	$('.menu-links li a').click(function() {
      $('.dropdown-menu').dropdown('toggle');
    });

});