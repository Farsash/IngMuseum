	// Выдвижная панель		
	$('#info_but').click(function() {
		if($(this).hasClass('left')) {
			$(".info_page").animate({"right": "+=418px"}, 'fast'),
			$(this).removeClass('left').addClass('right'); 
			$(this).removeClass('inf').addClass('cl'); 
		} else if($(this).hasClass('right')) {
			$(".info_page").animate({"right": "-=418px"}, 'fast'),
			$(this).removeClass('right').addClass('left'); 
			$(this).removeClass('cl').addClass('inf'); 
		}
	});

	// Меню
	$('#cl_menu_but').click(function() {
			$(".menu_panel").animate({"top": "-=154px"}, 'fast'),
			$(this).removeClass('up').addClass('bottom'); 
	});
	$('#menu_but').click(function() {
			$(".menu_panel").animate({"top": "+=154px"}, 'fast'),
			$(this).removeClass('bottom').addClass('up'); 
	});
	
		
	// Центрирование модального окна
			$(document).ready(function(){						   
			 $(window).resize(function(){
			  $('.className').css({
			   position:'absolute',
			   left: ($(window).width() 
				 - $('.className').outerWidth())/2,
			   top: ($(window).height() 
				 - $('.className').outerHeight())/2
			  });					
			 });			 
			 $(window).resize();
			});