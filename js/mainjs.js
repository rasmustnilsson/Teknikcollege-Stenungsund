	(function ($) {
		Drupal.behaviors.myModuleBehavior = {
			attach: function (centext, settings) {
				var menuHeight = $(".region-navigation-collapsible").height();
				setTimeout(function(){
					var sliderHeight = $(".field-content").height();
					console.log(sliderHeight);
					if(sliderHeight > (windowHeight - menuHeight)){
						sliderHeight = windowHeight - menuHeight;
						$(".field-content").height(sliderHeight);
					}
				}, 500);
		}
	};
})(jQuery);
var windowHeight = window.innerHeight;