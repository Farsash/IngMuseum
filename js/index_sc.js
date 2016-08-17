if ( ! Detector.webgl ) Detector.addGetWebGLMessage();
			var container;
			var camera, scene, renderer;
			var mesh, group1, group2, group3, light;
			var mouseX = 0, mouseY = 0;
			var windowHalfX = window.innerWidth / 2;
			var windowHalfY = window.innerHeight / 2;
			
			var t_loader = new THREE.TextureLoader();
			
			var group;
			
			// ============ Объекты ==============
			
			// ====== Мужик
			var man_dif = t_loader .load('proj/models/index/ing_man.jpg');
			var man_mat = new THREE.MeshBasicMaterial( { map: man_dif, side: THREE.DoubleSide} );		
			
			var ing_nien_dif = t_loader .load('proj/models/index/ing_nien.jpg');
			var ing_nien_mat = new THREE.MeshBasicMaterial( { map: ing_nien_dif, side: THREE.DoubleSide} );		
			
			var land_dif = t_loader .load('proj/models/index/land.jpg');
			var land_mat = new THREE.MeshBasicMaterial( { map:  land_dif, side: THREE.DoubleSide} );	
			
			var objects = [{
				path: 'proj/models/index/ing_man.js',
				mat: man_mat,
				name: 'leo',
				scale: 8,
				pos_x: 0,
				pos_y: -230,
				pos_z: 0,
			},{
				path: 'proj/models/index/ing_nien.js',
				mat: ing_nien_mat,
				name: 'leo',
				scale: 8,
				pos_x: 0,
				pos_y: -230,
				pos_z: 0,
			},{
				path: 'proj/models/index/land.js',
				mat: land_mat,
				name: 'leo',
				scale: 8,
				pos_x: 0,
				pos_y: -230,
				pos_z: 0,
			}];		
			
			
			init();
			obj_add(objects);
			animate();
			function init() {
				container = document.getElementById( 'container' );
				camera = new THREE.PerspectiveCamera( 20, window.innerWidth / window.innerHeight, 1, 10000 );
				camera.position.z = 1800;
				scene = new THREE.Scene();
				scene.fog = new THREE.FogExp2(0xffffff, 0.0005, 0.0005);
				renderer = new THREE.WebGLRenderer( { antialias: true } );
				renderer.setClearColor( 0xffffff );
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );
				container.appendChild( renderer.domElement );
				document.addEventListener( 'mousemove', onDocumentMouseMove, false );
				//
				window.addEventListener( 'resize', onWindowResize, false );
			}
			function onWindowResize() {
				windowHalfX = window.innerWidth / 2;
				windowHalfY = window.innerHeight / 2;
				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();
				renderer.setSize( window.innerWidth, window.innerHeight );
			}
			function onDocumentMouseMove( event ) {
				mouseX = ( event.clientX - windowHalfX );
				mouseY = ( event.clientY - windowHalfY );
			}
			//
			function animate() {
				requestAnimationFrame( animate );
				render();
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
							group = new THREE.Object3D();
							group.add( object );
							group.position.set (0, 100, 100);
							group.rotation.x = 0.3;
							scene.add(group);
							
							render();
						}
					);
				});
			}
			
			
			function render() {
				camera.position.x += ( mouseX - camera.position.x ) * 0.05;
				camera.position.y += ( - mouseY - camera.position.y ) * 0.05;
				camera.lookAt( scene.position );
				renderer.render( scene, camera );
			}
			
			// Центрирование модального окна
			$(document).ready(function(){						   
			 $(window).resize(function(){
			  $('.index_cen').css({
			   position:'absolute',
			   left: ($(window).width() 
				 - $('.index_cen').outerWidth())/2,
			   top: ($(window).height() 
				 - $('.index_cen').outerHeight())/2
			  });					
			 });			 
			 $(window).resize();
			});