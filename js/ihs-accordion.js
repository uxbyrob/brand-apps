$(function toggleChevron(e) {
  	$(e.target)
	.prev('.panel-heading')
	.find(".panel-title")
	.toggleClass('chevron-open');
	console.log(e.target);
        
$('.ihs-accordion').on('shown.bs.collapse', toggleChevron);
$('.ihs-accordion').on('hidden.bs.collapse', toggleChevron);

});