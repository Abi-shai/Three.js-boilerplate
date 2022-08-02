import {
    PlaneBufferGeometry,
    Mesh,
    MeshBasicMaterial,
    DoubleSide,
} from 'three';

/**
 * Plane related implementations
 * @param {Object} scene - Add Scene object created in three.js
 */

function plane(scene) {
    if(!scene) {
        throw new Error(`Please add the scene parameter to the plane when using`);
    } else {
        const geometry = new PlaneBufferGeometry(1, 1, 32, 32);

        const material = new MeshBasicMaterial({
            color: 0xD88F03,
            side: DoubleSide,
        });
    
        const planeMesh = new Mesh(geometry, material);
        const addedToMesh = scene.add(planeMesh);

        return addedToMesh;
    };
};

export default plane;