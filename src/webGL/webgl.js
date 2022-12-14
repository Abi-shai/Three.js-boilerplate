import {
    Scene,
    PerspectiveCamera,
    WebGLRenderer,
    Clock,
} from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import { checkIfDebug } from './utils';

import plane from './plane';

/**
 * WebGl related implementations
 * @param {Element} canvas - Canvas html element to add webGl experience
 */

const webGL = (canvas) => {
    const scene = new Scene();

    /**
     * Configs
     */
    const sizes = {
        width: window.innerWidth,
        height: window.innerHeight,
    };

    /**
     * Setting up camera
     */
    const camera = new PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
    camera.position.set(1, 1, 1);
    scene.add(camera);

    /**
     * Setting up controls
     */
    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;


    /**
     * Setting up renderer
     */
    const renderer = new WebGLRenderer({
        canvas: canvas,
        antialias: true,
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x3F3F3F, 1.0);

    /**
     * Handling resizing
     */
    window.addEventListener('resize', () =>
    {
        // Update sizes
        sizes.width = window.innerWidth;
        sizes.height = window.innerHeight;

        // Update camera
        camera.aspect = sizes.width / sizes.height;
        camera.updateProjectionMatrix();

        // Update renderer
        renderer.setSize(sizes.width, sizes.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    /**
     * Animation on each frame
     */
    const clock = new Clock();
    let lastElapsedTime = 0;

    const tick = () =>
    {
        const elapsedTime = clock.getElapsedTime();
        const deltaTime = elapsedTime - lastElapsedTime;
        lastElapsedTime = elapsedTime;

        // Update controls
        controls.update();

        // Render
        renderer.render(scene, camera);

        // Call tick again on the next frame
        window.requestAnimationFrame(tick);
    };

    plane(scene);
    checkIfDebug();
    tick();
};

export default webGL;



