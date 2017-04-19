	(function ($) {
		Drupal.behaviors.myModuleBehavior = {
			attach: function (centext, settings) {
				$(".slides").append("<a class='ctaText' href='node/1'>Om Teknikcollege</a>");
				var windowHeight = window.innerHeight;
				var flexsliderCss = $('.views-field-field-flexslider-bild > div');
				function flexSHeight(){
					var menuHeight = $(".region-navigation-collapsible").height();
					$(".views-field-field-flexslider-bild > div img").one("load", function() {
						setTimeout(function(){
						this.sliderHeight = $(".views-field-field-flexslider-bild > div").height();
						if(sliderHeight > (windowHeight - menuHeight)){
							sliderHeight = windowHeight - menuHeight;
							flexsliderCss.css({"height": sliderHeight, "overflow": "hidden"});
						} else{
							flexsliderCss.css({"height": "", "overflow": ""});
						}
						}, 0);				
					}).each(function() {
						if(this.complete) $(this).load();
					});	
				}
				flexSHeight();
				$(window).resize(function(){
					flexSHeight();
				});
		}
	};
})(jQuery);
