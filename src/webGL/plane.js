import {
    PlaneBufferGeometry,
    Mesh,
    MeshStandardMaterial,
    DoubleSide,
} from 'three';

/**
 * @param {Object} scene - Scene created with three.js
 */

function plane(scene) {
    const geometry = new PlaneBufferGeometry(1, 1, 32, 32);

    const material = new MeshStandardMaterial({
        color: 0xFFFFFF,
        side: DoubleSide,
    });

    const planeMesh = new Mesh(geometry, material);
    scene.add(planeMesh);
};

export default plane;