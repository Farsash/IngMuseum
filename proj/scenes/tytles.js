
	
	var viking_page_title = [
		'Рунический камень (V—X века)',
		'Топор викингов (Секира)',
		'Туфля от корельского национального костюма'
	];
	
	var viking_info_title = [
		'Рунический камень'+'<br/>'+'(V—X века)',
		'Туфля от карельского национального костюма'
	];
	
	var viking_info_text = [
		'<p>унический камень — валун с вырезанной на нём рунической надписью.Хотя наибольшее число рунных камней оставили по себе викинги IX—XI веков, наиболее древние рунические камни датируются IV столетием, наиболее поздние — XIX. Большинство рунических камней находятся в Скандинавии, остальные рассеяны по местам, которые посещались скандинавами в эпоху викингов (в том числе по Днепру вплоть до острова Березань). На рунические камни зачастую наносились изображения, но их не следует путать с чисто картинными камнями, где были только изображения.</p>',
		'Туфля правая, из светло-коричневой кожи. Носок загнут, рант прошит двойным швом толстыми коричневыми нитками. Спереди разрез и 6 сквозных отверстий для шнуровки. Шнуровка в виде тонких кожаных ремешков. На пятке ┴образный шов. По краю ранта и шва отпечатан орнамент. Обувь принадлежала Капонен (Кабановой) Дарье Петровне (род. в 1890-х гг.), сосланной с Карельского перешейка в Тверскую область, дер. Малое Высокое Весьегонского района.'
	];

	
	// Кнопки переключения
	var viking_img_prew = [
	'url(img/stone.jpg)',
	'url(img/molot.jpg)',
	'url(img/lab.jpg)'
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
		if (number_model == 2) {
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
	
	
	
	
	
	
	
	
	
