if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

	var container, stats, loader;
	var camera, controls, scene, renderer;
	var material_place;
	var number_model = 0; //Порядковый номер модели. Работает для создания объектов.
	
	var objects = []; // имена исключительно для id спрайта. Обнуляется при удалении.
	var remove_list = []; //Список объектов на удаление, формируется автоматически при создании
	var objects_add = []; // Список всех объектов, добавляются только по порядковому номеру
	var sprites = [];
	
	var t_loader = new THREE.TextureLoader();
	
	// ====== Object ====== //
	// Material
	// Line, sprites
	// Massive puah
	
	// ======= Objects ===============
	var host_mat = new THREE.MeshBasicMaterial( { color: 0x373b3c, side: THREE.DoubleSide} );
	
		var point_texture = t_loader .load( 'img/info_sp.svg' );
		// Уникальный набор
		var st_st_1 = t_loader .load( 'img/st_stone_1.svg' );
		var st_st_2 = t_loader .load( 'img/st_stone_2.svg' );
		var st_st_3 = t_loader .load( 'img/st_stone_3.svg' );
		var st_st_4 = t_loader .load( 'img/st_stone_4.svg' );
		
		// ============= Камень ==========		
			var stone_mat = new THREE.MeshBasicMaterial( { map: t_loader .load('models/viking/stone_dif.jpg')} );
			
			var stone_sprite = [{
				position:'dinamik',
				x:4, y:1, z:3,
				texture: point_texture,
				name: 'stone_sp',
				sprite_name: 'st'
			},{
				position: 'statick',
				texture: 'img/stione_title.svg',
				width:15, height:1.5,
				x: -15, y: 5, z: 3,
				name: 'stone_sp'
			},{
				position: 'statick',
				texture: 'img/st_borisovi.svg',
				width:9.20, height:1.5,
				x: -16, y: 3, z: 3,
				name: 'stone_sp'
			},{
				position:'dinamik',
				x:-10.5, y:3, z:3,
				texture: point_texture, 
				name: 'stone_sp', 
				sprite_name: 'st'
			},{
				position: 'statick',
				texture: 'img/st_st_krest.svg',
				width:9.2, height:1.5,
				x: -16, y: 1.5, z: 3,
				name: 'stone_sp'
			},{
				position:'dinamik',
				x:-10.5, y:1.5, z:3,
				texture: point_texture, 
				name: 'stone_sp', 
				sprite_name: 'st'
			},{
				position: 'statick',
				texture: 'img/st_tmutar.svg',
				width:11.6, height:1.5,
				x: -18.1, y: 0, z: 3,
				name: 'stone_sp'
			},{
				position:'dinamik',
				x:-10.5, y:0, z:3,
				texture: point_texture, 
				name: 'stone_sp', 
				sprite_name: 'st'
			},{
				position:'dinamik',
				x: 3, y:8, z:2,
				texture: st_st_1, 
				name: 'stone_sp', 
				sprite_name: 'st'
			},{
				position:'dinamik',
				x: 4.5, y:7, z:2,
				texture: st_st_2, 
				name: 'stone_sp', 
				sprite_name: 'st'
			},{
				position:'dinamik',
				x: 5.8, y:6, z:2,
				texture: st_st_3, 
				name: 'stone_sp', 
				sprite_name: 'st'
			},{
				position:'dinamik',
				x: 6.8, y:4.5, z:2,
				texture: st_st_4, 
				name: 'stone_sp', 
				sprite_name: 'st'
			}];
			sprites.push(stone_sprite);
			
			//Массив		
			var stone = [{
				position:'dinamik',
				path: 'models/viking/stone.json',
				mat: stone_mat,
				name: 'stone',
				scale: 0.3,
				pos_x: 0,
				pos_y: -3,
				pos_z: 0,
			}];	
			objects_add.push(stone);
			
			
			// ============= Молот ==========	
			var molot_dif = t_loader .load('models/viking/dif_molot.png');
			var molot_mat = new THREE.MeshBasicMaterial( { map: molot_dif, side: THREE.DoubleSide} );
			
			var skull_sprites2 = [{
				position:'dinamik',
				x:0, y:0, z:0,
				texture: point_texture, 
				name: 'skull_sp',
				sprite_name: 'ff'
			}];
			sprites.push(skull_sprites2);
			
			var molot = [{
				path: 'models/viking/molot.js',
				mat: molot_mat,
				name: 'molot',
				scale: 0.13,
				pos_x: 0,
				pos_y: 0,
				pos_z: 0,
			}];
			objects_add.push(molot);	
			
			// ============= Лабутен ==========	
			var lab_dif = t_loader .load('models/viking/labuten.jpg');
			var podlozka_dif = t_loader .load('models/viking/podlozka.jpg');
			var lab_mat = new THREE.MeshBasicMaterial( { map: lab_dif, side: THREE.DoubleSide} );		
			var podlozka_mat = new THREE.MeshBasicMaterial( { map: podlozka_dif, side: THREE.DoubleSide} );		
			var skull_sprites = [{
				position:'dinamik',
				x:0, y:0, z:0,
				texture: point_texture, 
				name: 'skull_sp',
				sprite_name: 'ff'
			},{
				position:'dinamik',
				x:12, y:1, z:3,
				texture: point_texture, 
				name: 'skull_sp',
				sprite_name: 'ff'
			},{
				position:'dinamik',
				x:32, y:1, z:3,
				texture: point_texture, 
				name: 'skull_sp',
				sprite_name: 'ff'
			}];
			sprites.push(skull_sprites);
			
			var leo = [{
				path: 'models/viking/labuten.js',
				mat: lab_mat,
				name: 'leo',
				scale: 0.02,
				pos_x: 0,
				pos_y: 0,
				pos_z: 0,
			},{
				path: 'models/viking/podlozka.js',
				mat: podlozka_mat,
				name: 'leo',
				scale: 0.02,
				pos_x: 0,
				pos_y: 0,
				pos_z: 0,
			}];		
			objects_add.push(leo);						
		
	
	// ============= Вызов функций =============	
	
	init();
	process();
	render();
	animate();

	// ============= Функции =============	
				
	function animate() {
		requestAnimationFrame(animate);
		renderer.render( scene, camera );
	}

	function onWindowResize() {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();

		renderer.setSize( window.innerWidth, window.innerHeight );
		render();
	}
			
	function render() {
		renderer.render( scene, camera );
	}
	
	function init() {
		container = document.getElementById( 'container' );
		
		camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 1000 );
		camera.position.z = 20;
		camera.position.y = 10;
		controls = new THREE.OrbitControls( camera, container );
		controls.addEventListener( 'change', render );
		controls.enableDamping = true;
		controls.dampingFactor = 1;
		controls.maxDistance = 120.0;
		scene = new THREE.Scene();

		// Окружение
		var enviroment_texture_sky = THREE.ImageUtils.loadTexture( 'img/panaramick.jpg' );				
		var skyBoxGeometry = new THREE.SphereGeometry(110, 20, 10 );
		var skyBoxMaterial = new THREE.MeshBasicMaterial( { map: enviroment_texture_sky, side: THREE.BackSide } );
		var skyBox = new THREE.Mesh( skyBoxGeometry, skyBoxMaterial );
		skyBox.position.y = 10;
		scene.add(skyBox);
		
		
		renderer = new THREE.WebGLRenderer( { antialias: false } );
		renderer.setClearColor( 0xff2222 );
		renderer.setPixelRatio( window.devicePixelRatio );
		renderer.setSize( window.innerWidth, window.innerHeight );
		
		container.appendChild( renderer.domElement );
		window.addEventListener( 'resize', onWindowResize, false );
		container.addEventListener( 'mousedown', onDocumentMouseDown, false );
		animate();
	}

	function obj_add(ht) {
		loader = new THREE.JSONLoader();	
		ht.forEach(function(o) {
			loader.load(o.path,
				function ( geometry, materials ) {
					var object = new THREE.Mesh( geometry, o.mat );
					object.scale.set(o.scale,o.scale,o.scale);
					object.position.set(o.pos_x,o.pos_y,o.pos_z);
					geometry.computeTangents();
					object.name = o.name;
					remove_list.push(object.name); // массив удаления
					scene.add(object);
					render();
				}
			);
		});
	}
	
	function sprite_ad(em) {
		var i = 1;
		em.forEach(function(ln) {
			if (ln.position == 'dinamik') {
			
				var mat = new THREE.SpriteMaterial({
				map: ln.texture,
				transparent: false,
				useScreenCoordinates: false,
				});
				var sp = new THREE.Sprite(mat);
				sp.position.set( ln.x, ln.y, ln.z );
				sp.scale.set( 1, 1, 1 ); // CHANGED
				sp.name = ln.name;
				sp.sprite_name = ln.sprite_name + i; // чтобы удалять по одному имени, а клик по другому
				// передаем на клик
				sp.callback = function() {
					modals(this.sprite_name);
				}	
				scene.add(sp);
				objects.push(sp);
				remove_list.push(sp.name); // массив удаления
				i++;	
			} else if (ln.position == 'statick'){
					var dif = t_loader .load( ln.texture );
					var mat = new THREE.MeshBasicMaterial({map: dif});
					mat.transparent = true;
					var titleQuad = new THREE.Mesh(
						new THREE.PlaneGeometry(ln.width, ln.height), mat  
					);
					titleQuad.doubleSided = true;
					titleQuad.position.set(ln.x,ln.y,ln.z);
					titleQuad.name = ln.name;
					scene.add(titleQuad);
					render();
			} 
		});		
	}
	function modals(md) {
		var mod_content = '#' + md;
		text_res(mod_content);
		$( '.mod_contener' ).fadeIn(500);
	}
	
	function obj_del(el){
		el.forEach(function(o) {
			console.log(o);
			var selectedObject = scene.getObjectByName(o);
			scene.remove(selectedObject);
			render();
		});
		render();
	}

	var raycaster = new THREE.Raycaster();
	var mouse = new THREE.Vector2();
	function onDocumentMouseDown( event ) {
	    event.preventDefault();

	    mouse.x = ( event.clientX / renderer.domElement.clientWidth ) * 2 - 1;
	    mouse.y = - ( event.clientY / renderer.domElement.clientHeight ) * 2 + 1;

	    raycaster.setFromCamera( mouse, camera );
	    var intersects = raycaster.intersectObjects( objects ); 

	    if ( intersects.length > 0 ) {
	        intersects[0].object.callback();
	    }
	}

	$('#prev_ad').click(function(e) {
		e.preventDefault();
		if (number_model == 0){alert('нет');} else {number_model = number_model - 1; process();}
	});
	$('#next_ad').click(function(e) {
		e.preventDefault();
		if (number_model == 3){alert('нет');}else {number_model = number_model + 1; process();}
	});

	function process() {
			objects = [];
			obj_add(objects_add[number_model]);
			obj_del(remove_list);
			obj_del(remove_list);
			sprite_ad(sprites[number_model]);
	}