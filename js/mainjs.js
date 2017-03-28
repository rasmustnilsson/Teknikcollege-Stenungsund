	(function ($) {
		Drupal.behaviors.myModuleBehavior = {
			attach: function (centext, settings) {
				var menuHeight = $(".region-navigation-collapsible").height();
				$(".views-field-field-flexslider-image > div img").one("load", function() {
					setTimeout(function(){
					var sliderHeight = $(".views-field-field-flexslider-image > div").height();
					if(sliderHeight > (windowHeight - menuHeight)){
						sliderHeight = windowHeight - menuHeight;
						$(".views-field-field-flexslider-image > div").height(sliderHeight);
						$(".views-field-field-flexslider-image > div").css("overflow", "hidden");
					}	
					}, 0);				
				}).each(function() {
					if(this.complete) $(this).load();
				});
		}
	};
})(jQuery);
var windowHeight = window.innerHeight;