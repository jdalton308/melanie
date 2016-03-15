$(function(){

	var sliderSettings = {
		dots: true,
		arrows: false,
		infinite: false
	}

	$('#slider-1').slick(sliderSettings);

	$('#slider-2').slick(sliderSettings);


  // Slider info drop-downs
  var $triggers = $('.slider .drop-trigger');

  $triggers.click(function(){
    var $this = $(this);
    var $info = $this.siblings('.info-cont');
    $info.addClass('show');

    $info.click(function(){
      $(this).removeClass('show');
      $info.off('click');
    });
  });
});