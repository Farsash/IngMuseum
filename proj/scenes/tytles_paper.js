
	
	var viking_page_title = [
		'Павловск',
		'Лигово',
		'Сиверская',
		'Троицкий мост'
	];
	
	var viking_info_title = [
		'Павловск',
		'Туфля от карельского национального костюма'
	];
	
	var viking_info_text = [
		'На месте современного Павловска ещё в XIII веке новгородцами была построена деревянная крепость, названная ими «Городок на Славянке». Эти земли входили в Водскую пятину Новгородской земли. В середине XVIII века здесь существовали деревни Линна (фин. linna — город, крепость, по находившейся рядом шведской крепости на месте теперешней улицы Работницы) и Сеппеля (фин. seppelae — кузница, на месте теперешних Оранжерей). В окрестностях деревень любила охотиться Екатерина II, наезжавшая сюда со свитой из Царского Села. Два деревянных домика с названиями «Крик» (сгорел во время оккупации) и «Крак» (разобран в 1929 году), выстроенные в лесу на берегах Славянки, служили для кратковременных остановок во время охоты.12 декабря 1777 года 362 десятины земли по берегам Славянки, с лесными угодьями, пашнями, двумя небольшими деревнями со крестьянами Екатерина II пожаловала своему сыну, будущему императору Павлу. Эта дата считается датой основания',

		'Туфля правая, из светло-коричневой кожи. Носок загнут, рант прошит двойным швом толстыми коричневыми нитками. Спереди разрез и 6 сквозных отверстий для шнуровки. Шнуровка в виде тонких кожаных ремешков. На пятке ┴образный шов. По краю ранта и шва отпечатан орнамент. Обувь принадлежала Капонен (Кабановой) Дарье Петровне (род. в 1890-х гг.), сосланной с Карельского перешейка в Тверскую область, дер. Малое Высокое Весьегонского района.'
	];

	
	// Кнопки переключения
	var viking_img_prew = [
	'url(img/pav.jpg)',
	'url(img/lig.jpg)',
	'url(img/siv.jpg)',
	'url(img/tro.jpg)'
	];

	// Первая модель
	document.getElementById('next_ad').style.backgroundImage = viking_img_prew[1];
	document.getElementById("titles_vik").innerHTML= viking_page_title[number_model];	
	document.getElementById("info_title").innerHTML= viking_info_title[number_model];
	document.getElementById("info_text").innerHTML= viking_info_text[number_model];
	// Для переключателей
	$( "#prev_ad" ).click(function() {	
		if (number_model == 0) {
			$( this ).hide();
		} else {
			$( this ).show();
			$( "#next_ad" ).show();
		}
	});
	$( "#next_ad" ).click(function() {	
		if (number_model == 1) {
			$( "#prev_ad" ).show();
		} 
		if (number_model == 3) {
			$( this ).hide();
		} else {
			$( this ).show();
		}
	});
	

	$( ".arrow_but_contener a" ).click(function() {
			document.getElementById("titles_vik").innerHTML= viking_page_title[number_model];
			document.getElementById("info_title").innerHTML= viking_info_title[number_model];
			document.getElementById("info_text").innerHTML= viking_info_text[number_model];
			document.getElementById('prev_ad').style.backgroundImage = viking_img_prew[number_model-1];	
			
			document.getElementById('next_ad').style.backgroundImage = viking_img_prew[number_model+1];
	});
	
	
	
	
	
	
	
	
	
