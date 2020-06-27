function draw(index, grow_period, shrink_period, grow_text, shrink_text, radius, min_radius) {
  var scaleRate = (+radius)/(+min_radius);
  var obj = jQuery('.grow-shrink').eq(index);
  var span = jQuery('.grow-shrink').eq(index).find('span');
  
  if (obj.hasClass('grow')) {
    obj.css('transition', 'all ' + shrink_period + 'ms ease-in-out 800ms');
    span.css('transition', 'none');
    span.fadeOut( 400, function() {
      span.html(shrink_text);
      span.fadeIn(400, function(){
        span.css('transform', 'scale(1)');
        span.css('transition', 'all ' + (+shrink_period - 800) + 'ms ease-in-out');
      });
    });
    obj.removeClass('grow');
    obj.css('width',min_radius);
    obj.css('height',min_radius);
    setTimeout(function() { draw(index, grow_period, shrink_period, grow_text, shrink_text, radius, min_radius); }, (+shrink_period));
  } else {
    obj.css('transition', 'all ' + grow_period + 'ms ease-in-out 800ms');
    span.css('transition', 'none');
    span.fadeOut( 400, function() {
      span.html(grow_text);
      span.fadeIn(400, function(){
        span.css('transform', 'scale(' + scaleRate + ')');
        span.css('transition', 'all ' + (+grow_period - 800) + 'ms ease-in-out');
      });
    });
    obj.addClass('grow');
    obj.css('width',radius);
    obj.css('height',radius);
    setTimeout(function() { draw(index, grow_period, shrink_period, grow_text, shrink_text, radius, min_radius); }, (+grow_period));
  }
}

jQuery( document ).ready(function() {
    jQuery( ".grow-shrink" ).each(function( index ) {
      var radius = jQuery(this).find('.radius').val();
      var min_radius = jQuery(this).find('.min_radius').val();
      var fontsize = jQuery(this).find('.fontsize').val();
      var text_color = jQuery(this).find('.text_color').val();
      var circle_color = jQuery(this).find('.circle_color').val();
      
      jQuery(this).parent().css('height', (+radius + 100) + 'px');
      jQuery(this).parent().css('position', 'relative');

      jQuery(this).css('background-color', circle_color);
      jQuery(this).css('width',min_radius + 'px');
      jQuery(this).css('height',min_radius + 'px');

      jQuery(this).append('<span></span>');      
      jQuery(this).find('span').css('font-size',fontsize+'px');
      jQuery(this).find('span').css('color',text_color);
    });

    setTimeout(function() {
      jQuery( ".grow-shrink" ).each(function( index ) {
        var radius = jQuery(this).find('.radius').val();
        var min_radius = jQuery(this).find('.min_radius').val();
        var fontsize = jQuery(this).find('.fontsize').val();
        var text_color = jQuery(this).find('.text_color').val();
        var circle_color = jQuery(this).find('.circle_color').val();
        var grow_period = jQuery(this).find('.grow_period').val(); 
        var shrink_period = jQuery(this).find('.shrink_period').val(); 
        var grow_text = jQuery(this).find('.grow_text').val();
        var shrink_text = jQuery(this).find('.shrink_text').val();
        draw(index, grow_period, shrink_period, grow_text, shrink_text, radius, min_radius);
      });
    }, 200);
});