if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

	var container, stats, loader;
	var camera, controls, scene, renderer;
	var material_place;
	var number_model = 0; //Порядковый номер модели. Работает для создания объектов.
	
	var objects = []; // имена исключительно для id спрайта. Обнуляется при удалении.
	var remove_list = [];
	var objects_add = [];
	var sprites = [];
	
	// ====== Object ====== //
	// Material
	// Line, sprites
	// Massive puah
	
	// ======= Objects ===============
		var point_texture = THREE.ImageUtils.loadTexture( 'img/point.png' );
		
		// ============= Камень ==========		
			var stone_dif = THREE.ImageUtils.loadTexture('texture/v_x/stone_dif.jpg');
			var stone_mat = new THREE.MeshBasicMaterial( { map:stone_dif} );
			
			var stone_lin_1 = [{x:0, y:2, z:2},{x:-5, y:8, z:10}];
			var stone_lin_2 = [{x:3, y:1, z:2},{x:6, y:8, z:10}];
			var stone_sprite = [{x:0, y:4, z:3,texture: point_texture, name: 'stone_sp', sprite_name: 'st'},{x:4, y:1, z:3,texture: point_texture, name: 'stone_sp',sprite_name: 'st'}];
			sprites.push(stone_sprite);
			
			//Массив		
			var stone = [{
				path: 'model/v_x/stone.json',
				mat: stone_mat,
				name: 'stone',
				scale: 0.3,
				pos_x: 0,
				pos_y: -3,
				pos_z: 0,
			}];	
			objects_add.push(stone);			
		
		// ============= Лев ==========	
			var leo_dif = THREE.ImageUtils.loadTexture('texture/v_x/L_Dif.jpg');
			var leo_mat = new THREE.MeshBasicMaterial( { map:leo_dif, side: THREE.DoubleSide} );		
			var skull_sprites = [{x:0, y:0, z:0,texture: point_texture, name: 'skull_sp',sprite_name: 'ff'},{x:12, y:1, z:3,texture: point_texture, name: 'skull_sp',sprite_name: 'ff'},{x:32, y:1, z:3,texture: point_texture, name: 'skull_sp',sprite_name: 'ff'}];
			sprites.push(skull_sprites);
			
			var leo = [{
				path: 'model/v_x/leo.js',
				mat: leo_mat,
				name: 'leo',
				scale: 1,
				pos_x: 0,
				pos_y: -8,
				pos_z: 0,
			}];		
			objects_add.push(leo);			

		// ============= Стрела ==========		
			var klinock_dif = THREE.ImageUtils.loadTexture('texture/v_x/klinock_dif.jpg');
			var klinock_mat = new THREE.MeshBasicMaterial( { map:klinock_dif, side: THREE.DoubleSide} );
			var sprites2 = [{x:0, y:4, z:3,texture: point_texture, name: 'stone_sp',sprite_name: 'st'},{x:4, y:1, z:3,texture: point_texture, name: 'stone_sp',sprite_name: 'st'}];
			sprites.push(sprites2);		
					
			var klinock = [{
				path: 'model/v_x/klinock.js',
				mat: klinock_mat,
				name: 'klinock',
				scale: 0.2,
				pos_x: 0,
				pos_y: -3,
				pos_z: 0,
			}];		
			objects_add.push(klinock);	
		
		// Когда я их удаляю, удаляются ВСЕ ЛИНИИ !!!! 
		var lin = [{x:6, y:6, z:-5},{x:6, y:9, z:-12}];
		var lin2 = [{x:10, y:5, z:2},{x:3, y:11, z:10}];
		var lin3 = [{x:3, y:-2, z:-3},{x:9, y:-4, z:-4}];
		var lin4 = [{x:0, y:2, z:4},{x:-6, y:4, z:10}];
		var lin5 = [{x:0, y:0, z:4},{x:-6, y:0, z:10}];
		var lines =  [lin, lin2, lin3, lin4, lin5];
		
		
	
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
		controls.maxDistance = 30.0;
		scene = new THREE.Scene();

		// Окружение
		var enviroment_texture_sky = THREE.ImageUtils.loadTexture( 'texture/panaramick.jpg' );				
		var skyBoxGeometry = new THREE.SphereGeometry(110, 20, 10 );
		var skyBoxMaterial = new THREE.MeshBasicMaterial( { map: enviroment_texture_sky, side: THREE.BackSide } );
		var skyBox = new THREE.Mesh( skyBoxGeometry, skyBoxMaterial );
		skyBox.position.y = 10;
		scene.add(skyBox);
		
		
		renderer = new THREE.WebGLRenderer( { antialias: false } );
		renderer.setClearColor( 0x222222 );
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
					remove_list.push(object.name);
					scene.add(object);
					render();
				}
			);
		});
	}
	
	function sprite_ad(em) {
		var i = 1;
		em.forEach(function(ln) {
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
				alert(this.name);
				//modals(this.sprite_name);
			}	
			scene.add(sp);
			objects.push(sp);
			remove_list.push(sp.name);
			i++;
		});		
	}
	function modals(md) {
		var mod_content = '#' + md;
		$( mod_content).show(500);
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
			sprite_ad(sprites[number_model]);
	}