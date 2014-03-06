$(document).ready(function(){
			$(".gallery").galleryView({
				frame_gap: 3,
				frame_width: 180,
				frame_height: 90,
				show_captions: true,
				show_filmstrip_nav: false
			})
			
			setWidth()
			
			$(window).resize(function() {
			  setWidth()
			})
		});
		
		function setWidth(){
			if($(window).width() < 1170)
				$('#main').width(896)
					
			if($(window).width() > 1170)
				$('#main').width('auto')
		}
		
		function showCategory(categoryId)
		{
			if(categoryId == 0){
				$('.box:hidden').show("blind", {direction: "horizontal"}, 1000);
			}
			else{
				$('.box:not(.cat' + categoryId +')').hide("blind", {direction: "horizontal"}, 1000);
				$('.cat' + categoryId).show("blind", {direction: "horizontal"}, 1000)
			}
		}
		
		function showInfo(infoId)
		{
			if($('#info' +  infoId).is(":visible")){
				$("html, body").animate({ scrollTop: 0 }, "slow");
			}
			else{
				if($('.info').is(":visible")){
					$('.info').hide("blind", {}, 700);
					$("html, body").animate({ scrollTop: 0 }, "slow");
					$('#info' +  infoId).delay(700).show("blind", {}, 700);
				}
				else
					$('#info' +  infoId).show("blind", {}, 700);
			}
		}