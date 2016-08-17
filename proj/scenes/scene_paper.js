if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

	var container, stats, loader;
	var camera, controls, scene, renderer;
	var material_place;
	var number_model = 0; //Порядковый номер модели. Работает для создания объектов.
	
	var objects = []; // имена исключительно для id спрайта. Обнуляется при удалении.
	var remove_list = []; //Список объектов на удаление, формируется автоматически при создании
	var objects_add = []; // Список всех объектов, добавляются только по порядковому номеру
	var sprites = [];
	var object_obj = {};
	
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
		
		// ============= Открытка ==========		
		var stone_mat = new THREE.MeshBasicMaterial( { map: t_loader .load('models/pavlovsk_dif.jpg')} );
		var dif_img = [ 'models/pavlovsk_dif.jpg' , 'models/ligovo_dif.jpg'  , 'models/siverskaya_dif.jpg' , 'models/troickiy_dif.jpg']
			
		var paper_sp = [{
				position:'dinamik',
				x:-5, y:2, z:3,
				texture: point_texture,
				name: 'paper',
				sprite_name: 'pav'
			},{
				position:'dinamik',
				x:6, y:-1.5, z:3,
				texture: point_texture,
				name: 'paper',
				sprite_name: 'pav'
			},{
				position:'dinamik',
				x:0, y:-3.8, z:3,
				texture: point_texture,
				name: 'paper',
				sprite_name: 'pav'
			}];
			sprites.push(paper_sp);
			
		var paper_sp2 = [{
				position:'dinamik',
				x:4, y:1, z:3,
				texture: point_texture,
				name: 'paper',
				sprite_name: 'st'
		}];
			sprites.push(paper_sp2);
			
		var paper_sp3 = [{
				position:'dinamik',
				x:4, y:1, z:3,
				texture: point_texture,
				name: 'paper',
				sprite_name: 'st'
		}];
			sprites.push(paper_sp3);	
			
					var paper_sp4 = [{
				position:'dinamik',
				x:4, y:1, z:3,
				texture: point_texture,
				name: 'paper',
				sprite_name: 'st'
		}];
			sprites.push(paper_sp4);
			
			//Массив		
			var paper = [{
				path: 'models/paper_mod.js',
				mat: stone_mat,
				name: 'obj',
				scale: 0.014,
				pos_x: 0,
				pos_y: 0,
				pos_z: 0,
			}];			
		
	
	// ============= Вызов функций =============	
	
	init();
	obj_add(paper);
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

		renderer = new THREE.WebGLRenderer( { antialias: false } );
		renderer.setClearColor( 0x222222 );
		renderer.setPixelRatio( window.devicePixelRatio );
		renderer.setSize( window.innerWidth, window.innerHeight );
		
		container.appendChild( renderer.domElement );
		window.addEventListener( 'resize', onWindowResize, false );
		container.addEventListener( 'mousedown', onDocumentMouseDown, false );
		animate();
	}
	function getMaterial(o) {
		if (typeof o == 'string') {
			return new THREE.MeshBasicMaterial({map: t_loader.load('models/in_pres/' + o + '.jpg'), color: 0xffffff});
		} else if (typeof o == 'object') {
			var params = {};
			if (o.params) {
				if (o.params.opacity) {
					params.opacity = o.params.opacity;
				}
				if (o.params.map === true) {
					params.map = t_loader.load('models/in_pres/' + o.name + '.jpg');
				} else if (typeof o.params.map == 'string') {
					params.map = t_loader.load(o.params.map);
				} else if (o.params.map) {
					params.map = o.params.map;
				}
				if (o.params.color) {
					params.color = o.params.color;
				}
				if (o.params.transparent) {
					params.transparent = o.params.transparent;
				}
				if (o.params.side) {
					params.side = o.params.side;
				}
			} else if (o.name) {
				params = {map: t_loader.load( 'models/in_pres/' + o.name + '.jpg')};
			}
			if (Object.keys(params).length > 0) {
				if (o.type) {
					return new THREE[types[o.type]](params);
				} else {
					return new THREE.MeshBasicMaterial(params);
				}
			} else {
				return false;
			}
		}
	}
	function obj_add(ht) {
		loader = new THREE.JSONLoader();	
		ht.forEach(function(o) {
			loader.load(o.path,
				function ( geometry, materials ) {
					var mat_dif = new THREE.MeshBasicMaterial( { map: t_loader .load(dif_img[number_model])} );
					object_obj = new THREE.Mesh( geometry, mat_dif );
					object_obj.scale.set(o.scale,o.scale,o.scale);
					object_obj.position.set(o.pos_x,o.pos_y,o.pos_z);
					geometry.computeTangents();
					object_obj.name = o.name;
					scene.add(object_obj);
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
		if (number_model == 4){alert('нет');}else {number_model = number_model + 1; process();}
	});

	function process() {
			objects = [];
			obj_del(remove_list);
			obj_del(remove_list);
			sprite_ad(sprites[number_model]);
			object_obj.material = getMaterial({params: {map: t_loader.load( dif_img[number_model])}});
			render();
	}