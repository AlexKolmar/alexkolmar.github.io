﻿jQuery.fn.quicktip = function(options){

	var defaults = {
		speed: 500,
		xOffset: 25,
		yOffset: 15
	};

	var options = $.extend(defaults, options);

	return this.each(function(){

		var $this = jQuery(this)

		//Pass the title to a variable and then remove it from DOM
		if ($this.attr('title') != ''){
			var tipTitle = ($this.attr('title'));
		}else{
			var tipTitle = 'Quick tip';
		}
		//Remove title attribute
		$this.removeAttr('title');

		$(this).hover(function(e){
			$(this).css('cursor', 'pointer')
            $("body").append("<div id='tooltip'>" + tipTitle + "</div>");

            $("#tooltip")
			.css("top", (e.pageY + defaults.xOffset) + "px")
			.css("left", (e.pageX + defaults.yOffset) + "px")
			.fadeIn(options.speed);

			}, function() {
				//Remove the tooltip from the DOM
				$("#tooltip").remove();
			});

		$(this).mousemove(function(e) {
			$("#tooltip")
			.css("top", (e.pageY + defaults.xOffset) + "px")
			.css("left", (e.pageX + defaults.yOffset) + "px");
		});

	});

};

// Addition

$(document).ready(function(){ 
     $('a [title]').quicktip({ speed:700 }); 
     $('img [title]').quicktip({ speed:700 }); 
     $('div [title]').quicktip({ speed:700 }); 
     $('span [title]').quicktip({ speed:700 }); 
}); 
