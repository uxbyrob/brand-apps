// Jump menu at top to control navigation ...

$(function(){
	$('#pattern-selector').change(function(){
        	var targetPosition = $($(this).val()).offset().top;
        	$('html,body').animate({ scrollTop: targetPosition - 40}, 'slow');
        //alert("Something happened!");
    });
});