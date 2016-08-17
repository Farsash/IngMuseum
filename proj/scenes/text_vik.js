
	var viking_title_modal = [
		'Руны',
		'Борисовы камни',
		'Стерженский крест',
		'Тмутараканский камень',
		'Рунический камень из Рёка',
		'Кенсингтонский рунический камень',
		'Рунные камни в Еллинге',
		'Ингвар Путешественник'
	];
	
	var viking_img= [
		'url(img/R_2.jpg)',
		'url(img/St_bor.jpg)',
		'url(img/st_kr.jpg)',
		'url(img/st_r.jpg)',
		'url(img/st_rek.jpg)',
		'url(img/st_k.jpg)',
		'url(img/st_ev.jpg)',
		'url(img/st_ber.jpg)'
	];
	
	var viking_text_modal = [
		'<p>Руны — письменность древних германцев. Употреблялась с I—II по XII век на территории современных Дании,</p><br/><p>Швеции и Норвегии, по X—XIII век в Исландии и Гренландии, а в шведской провинции Даларна — вплоть до XIX века. Руны (символы) высекались или вырезались на камне, металле, дереве, кости, имеют специфическую угловатую форму, приспособленную для вырезания.</p>',
		
		'Двинские или Борисовы камни  — огромные (до нескольких метров) валуны с выбитым на них крестами и надписями, находящиеся (находившиеся) преимущественно в бассейне Западной Двины, на севере современной Белоруссии. Надпись на Рогволодовом камне, датированная 1171 годом, позволяет довольно уверенно определить её заказчика, как друцкого князя Рогволода Борисовича.  ',
		
		'Стерженский крест — каменный четырёхконечный крест, поставленный новгородским боярином Иванко Павловичем в память о совершенствовании водных путей.',
		
		'Тмутараканский камень — мраморная плита с высеченной на ней кириллической надписью на древнерусском языке, найденная в 1792 год на Таманском полуострове адмиралом П. Пустошкиным. В настоящее время хранится в Государственном Эрмитаже в Санкт-Петербурге. Является древнейшим свидетельством гидрографических работ Древней Руси.',
				
		'Рунический камень из Рёка — рунический камень из Рёка с наиболее длинной известной надписью, состоящей из 762 рун.Первоначальное место, где был установлен камень, неизвестно, но, вероятно, он стоял неподалёку от своего нынешнего местонахождения у церкви Рёкского прихода в коммуне Эдесхёг лен Эстергётланд. Надпись на камне датируется первой половиной IX века. Она покрывает камень со всех сторон, в том числе и сверху. Главный текст высечен при помощи так называемых «младших рун».',
		
		'Кенсингтонский рунический камень — каменная плита прямоугольной формы, лицевая и боковая стороны которой исписаны древними рунами. Плита состоит из осадочной горной породы граувакка, она была обнаружена в 1898 году близ города Кенсингтон, в штате Миннесота, США. Происхождение и значение этой плиты до сих пор оспаривается, некоторые учёные и историки рассматривают её как позднюю подделку.<br/>Суть надписи на плите сводится к тому, что в 1362 году (то есть задолго до путешествия Христофора Колумба) скандинавские путешественники достигли срединной части Северной Америки.',
		
		'Рунные камни в Еллинге — Рунные камни из датского города Еллинге, внесённые в список Всемирного наследия. Руническими надписи на валунах датируются X веком.На малом камне, установленном около 955 года, первым датским королём Гормом Старым высечена надпись:',
		
		'Ингвар Путешественник — предводитель неудачного похода викингов на Каспий в 1036—1042 годах. <br/>О походе Ингвара сохранились свидетельства на Ингваровых камнях, где записаны имена его участников. Большинство таких камней расположено вблизи озера Меларен в Швеции. Камень брата Ингвара гласит, что они вместе пошли за золотом на восток и умерли в земле Аббасидов. Ингвару Путешественнику так же посвящена значительная часть «Саги об Ингваре Путешественнике». Сага детально описывает детство Ингвара, затем рассказывает о его походе, значительно дополняя рассказ его мистикой.'
	];
	
	function text_res(md){
		if (number_model == 0) {
			if (md == '#st1') {
				// Надписи
				document.getElementById("title_modal").innerHTML= viking_title_modal[0];	
				document.getElementById("text_model").innerHTML= viking_text_modal[0];
				document.getElementById("img_mod").style.backgroundImage = viking_img[0];				
			} if (md == '#st2') {
				// Борисовы камни
				document.getElementById("title_modal").innerHTML= viking_title_modal[1];	
				document.getElementById("text_model").innerHTML= viking_text_modal[1];
				document.getElementById("img_mod").style.backgroundImage = viking_img[1];	
				
			} if (md == '#st3') {
				// Стерженский крест
				document.getElementById("title_modal").innerHTML= viking_title_modal[2];	
				document.getElementById("text_model").innerHTML= viking_text_modal[2];
				document.getElementById("img_mod").style.backgroundImage = viking_img[2];					
			} if (md == '#st4') {
				// Тмутараканский камень
				document.getElementById("title_modal").innerHTML= viking_title_modal[3];	
				document.getElementById("text_model").innerHTML= viking_text_modal[3];
				document.getElementById("img_mod").style.backgroundImage = viking_img[3];						
			} if (md == '#st5') {
				// Тмутараканский камень
				document.getElementById("title_modal").innerHTML= viking_title_modal[4];	
				document.getElementById("text_model").innerHTML= viking_text_modal[4];
				document.getElementById("img_mod").style.backgroundImage = viking_img[4];						
			} if (md == '#st6') {
				// Тмутараканский камень
				document.getElementById("title_modal").innerHTML= viking_title_modal[5];	
				document.getElementById("text_model").innerHTML= viking_text_modal[5];
				document.getElementById("img_mod").style.backgroundImage = viking_img[5];						
			} if (md == '#st7') {
				// Тмутараканский камень
				document.getElementById("title_modal").innerHTML= viking_title_modal[6];	
				document.getElementById("text_model").innerHTML= viking_text_modal[6];	
				document.getElementById("img_mod").style.backgroundImage = viking_img[6];	
			} if (md == '#st8') {
				// Тмутараканский камень
				document.getElementById("title_modal").innerHTML= viking_title_modal[7];	
				document.getElementById("text_model").innerHTML= viking_text_modal[7];	
				document.getElementById("img_mod").style.backgroundImage = viking_img[7];	
			}else {		
			}
		} else if (number_model == 1) {
			alert('dsfdsf');	
		}
	}