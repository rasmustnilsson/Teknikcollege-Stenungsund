	(function ($) {
		Drupal.behaviors.myModuleBehavior = {
			attach: function (centext, settings) {
				var menuHeight = $(".region-navigation-collapsible").height();
				$(".field-content img").one("load", function() {
					var sliderHeight = $(".field-content").height();
					if(sliderHeight > (windowHeight - menuHeight)){
						sliderHeight = windowHeight - menuHeight;
						$(".field-content").height(sliderHeight);
						$(".field-content").css("overflow", "hidden");
					}					
				}).each(function() {
					if(this.complete) $(this).load();
				});
		}
	};
})(jQuery);
var windowHeight = window.innerHeight;