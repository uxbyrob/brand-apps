$(function() {
  var input = '';
	//$('.required').prevAll().append(" found");
	//console.log(required);

  	// Look for any required classes and move asterik to label
    $( ".required" ).each(function() {
  		$( this ).closest(':has("label")').find('label').addClass( "required-add" );
  		$( this ).remove();   	    	
 	});



  // Hides and show X based on state set for input field //

 	// when focus put on field, clear out placeholder text, if no entry made, bring back on focus out
  $('.form-control-feedback').prev().keyup(function() {
    var t = $(this);
    if ( !(t.attr('readonly') || t.attr('disabled')) ){
      t.next('span').toggle(Boolean(t.val()));
    }
  });

  $(".form-control-feedback.ihs-icon-x").click(function () {
      $(this).prev('input').val('').focus();
      $(this).hide();
  }).hide($(this).prev('input').val());

});