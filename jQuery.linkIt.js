/*
 * name:    LinkIT	
 * author:  Cosmina Palade 
 * version: 0.1.0
 * license: MIT
*/
$(document).ready(function(){

	$.fn.linkIt = function(options){ 

		//Set the default link options
		var settings = $.extend({
			
			href: null,
			text: null,
			target: "_blank"

		}, options), link = this; 

		//Basic validation
		if(settings.href === null){
			console.log("No link is provided for the given link target");
			return link;
		}

		else{

			settings.text === null ? settings.text = link.text() : settings.text; 

			return (function (){

				link.wrap("<a target='"+settings.target+"' href='"+settings.href+"'></a>").text(settings.text);

				$("a").css("text-decoration","none");
			}()); 
			
		}


	}

	$("span").click( function(){
		
		$(this).linkIt({
			href: "https://www.test.com/"
		})
	});


});