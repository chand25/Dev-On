if ( ! Detector.webgl ) Detector.addGetWebGLMessage();
      const container =  document.querySelector('.citymove');

      var container;
      var camera, scene, renderer;
      var image, texture, material, mesh;
      var composer;
      var mouseX = 0;
      var mouseY = 0;


      //Set the scene size.
        const WIDTH = window.innerWidth;
        const HEIGHT = window.innerHeight;

    // Set some camera attributes.
        const VIEW_ANGLE = 40;
        const ASPECT = WIDTH / HEIGHT;
        const NEAR = 0.1;
        const FAR = 10000;
        var windowHalfX = window.innerWidth / 2;
        var windowHalfY = window.innerHeight / 2;
        var cube_count,
        meshes = [],
        materials = [],
        xgrid = 20,
        ygrid = 10;
      init();
      animate();

      function init() {
        camera = new THREE.PerspectiveCamera( VIEW_ANGLE, ASPECT, 1, 10000 );
        camera.position.z = 500;
        scene = new THREE.Scene();

         //LIGHTS
        var light = new THREE.DirectionalLight( 0x3366FF,2 );
        light.position.set( 0.5, 1, 1 ).normalize();
        scene.add( light );



      scene.background = new THREE.CubeTextureLoader()
       .setPath( 'textures/cubeMaps/' )
          .load( [
            '1.png',
            '2.png',
            '3.png',
            '4.png',
            '5.png',
            '6.png'
          ] );


        var material = new THREE.MeshPhongMaterial( { map: THREE.ImageUtils.loadTexture('./assets/bksunset.jpg') } );

        //
        renderer = new THREE.WebGLRenderer( { antialias: false } );
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize( WIDTH, HEIGHT);
        container.appendChild( renderer.domElement );
        image = document.getElementById( 'video' );
        texture = new THREE.VideoTexture( video );
        //texture.minFilter = THREE.LinearFilter;
        //texture.magFilter = THREE.LinearFilter;
        texture.wrapS = THREE.ClampToEdgeWrapping;
        texture.wrapT = THREE.ClampToEdgeWrapping;
        texture.format = THREE.RGBFormat;
        //
        document.addEventListener( 'mousemove', onDocumentMouseMove, false );
        window.addEventListener( 'resize', onWindowResize, true );
}

function onWindowResize() {
        windowHalfX;
        windowHalfY;
        camera.aspect = ASPECT;
        camera.updateProjectionMatrix();
        effect.setSize( WIDTH, HEIGHT );
      }


      function onDocumentMouseMove(event) {
        mouseY = ( event.clientY - window.innerHeight );
      }
      //
      function animate() {
        requestAnimationFrame( animate );
        render();
      }

      function render() {
        var timer = -0.0002 * Date.now();
        camera.position.y += ( - mouseY - camera.position.y ) * .05;
        camera.position.x = 1000 * Math.cos( timer );
        camera.position.z = 1000 * Math.sin( timer );
        camera.lookAt( scene.position );
        effect.render( scene, camera );
        if ( STATS_ENABLED ) stats.update();
      }

