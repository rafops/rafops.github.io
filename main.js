// var container;
// var camera, scene, renderer;
// var geometry, root;
// var mouseX = 0, mouseY = 0;
// var windowHalfX = window.innerWidth / 2;
// var windowHalfY = window.innerHeight / 2;
//
// document.addEventListener( 'mousemove', onDocumentMouseMove, false );
//
// init();
// animate();
//
// function init() {
//
//   container = document.getElementById('clouds');
//
//   camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 15000 );
//   camera.position.z = 500;
//
//   scene = new THREE.Scene();
//
//   var geometry = new THREE.BoxGeometry( 100, 100, 100 );
//   // var material = new THREE.MeshNormalMaterial();
//   var material = new THREE.MeshStandardMaterial({
//     opacity: 0.05,
//     transparent: true
//   });
//
//   root = new THREE.Mesh( geometry, material );
//   root.position.x = 1000;
//   scene.add( root );
//
//   var amount = 50, object, parent = root;
//
//   for ( var i = 0; i < amount; i ++ ) {
//
//     object = new THREE.Mesh( geometry, material );
//     object.position.x = 100;
//
//     parent.add( object );
//     parent = object;
//
//   }
//
//   parent = root;
//
//   for ( var i = 0; i < amount; i ++ ) {
//
//     object = new THREE.Mesh( geometry, material );
//     object.position.x = - 100;
//
//     parent.add( object );
//     parent = object;
//
//   }
//
//   parent = root;
//
//   for ( var i = 0; i < amount; i ++ ) {
//
//     object = new THREE.Mesh( geometry, material );
//     object.position.y = - 100;
//
//     parent.add( object );
//     parent = object;
//
//   }
//
//   parent = root;
//
//   for ( var i = 0; i < amount; i ++ ) {
//
//     object = new THREE.Mesh( geometry, material );
//     object.position.y = 100;
//
//     parent.add( object );
//     parent = object;
//
//   }
//
//   parent = root;
//
//   for ( var i = 0; i < amount; i ++ ) {
//
//     object = new THREE.Mesh( geometry, material );
//     object.position.z = - 100;
//
//     parent.add( object );
//     parent = object;
//
//   }
//
//   parent = root;
//
//   for ( var i = 0; i < amount; i ++ ) {
//
//     object = new THREE.Mesh( geometry, material );
//     object.position.z = 100;
//
//     parent.add( object );
//     parent = object;
//
//   }
//
//   renderer = new THREE.WebGLRenderer({ alpha: true });
//   renderer.setSize( window.innerWidth, window.document.body.scrollHeight );
//   renderer.sortObjects = false;
//   container.appendChild( renderer.domElement );
//
//
//   window.addEventListener( 'resize', onWindowResize, false );
//
// }
//
// function onWindowResize() {
//
//   windowHalfX = window.innerWidth / 2;
//   windowHalfY = window.innerHeight / 2;
//
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//
//   renderer.setSize( window.innerWidth, window.document.body.scrollHeight );
//
// }
//
// function onDocumentMouseMove(event) {
//
//   mouseX = ( event.clientX - windowHalfX ) * 10;
//   mouseY = ( event.clientY - windowHalfY ) * 10;
//
// }
//
// function animate() {
//   requestAnimationFrame( animate );
//   render();
// }
//
// function render() {
//
//   var time = Date.now() * 0.000005;
//
//   var rx = Math.sin( time * 0.7 ) * 0.2;
//   var ry = Math.sin( time * 0.3 ) * 0.1;
//   var rz = Math.sin( time * 0.2 ) * 0.1;
//
//   // camera.position.x += ( mouseX - camera.position.x ) * .05;
//   // camera.position.y += ( - mouseY - camera.position.y ) * .05;
//
//   camera.lookAt( scene.position );
//
//   root.traverse( function ( object ) {
//
//     object.rotation.x = rx;
//     object.rotation.y = ry;
//     object.rotation.z = rz;
//
//   } );
//
//   renderer.render( scene, camera );
//
// }
