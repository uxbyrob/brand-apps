$(function() {

  function calcWidth() {
      
      var navwidth = 0;
      var morewidth = $('#contents .more').outerWidth(true);
      var extraWidth = $('#contents .more').data('width');
      
      $('#contents > li:not(.more)').each(function() {
          navwidth += $(this).outerWidth( true );
      });
      
      var availablespace = $('#advanced').outerWidth(true) - (morewidth + extraWidth);
      
      if (navwidth > availablespace) {
        var lastItem = $('#contents > li:not(.more)').last();
        lastItem.attr('data-width', lastItem.outerWidth(true));
        lastItem.prependTo($('#contents .more ul.menu-hidden'));
        calcWidth();
      
      } else {
        var firstMoreElement = $('#contents li.more li').first();
        
        if (navwidth + firstMoreElement.data('width') < availablespace) {
          firstMoreElement.insertBefore($('#contents .more'));
          calcWidth();
        }
      
      }
      
      if ($('.more li').length > 0) {
        $('.more').css('display','inline-block');
      
      } else {
        $('.more').css('display','none');
      
      }
  }
    
  $(window).on('resize load',function(){
    calcWidth();
  });

  $('.select-menu').bootstrapSelect({
      'button-style': 'btn-primary'
  });

  $('.select-menu-short').bootstrapSelect({
      'button-style': 'btn-primary',
      'field-size': 'input-sm'
  });

  /* 
  <select class="selectpicker">
    <option>Mustard</option>
    <option>Ketchup</option>
    <option>Relish</option>
  </select>

  $('.selectpicker').selectpicker({
    style: 'btn-info',
    size: 4
  });
  */
});

 