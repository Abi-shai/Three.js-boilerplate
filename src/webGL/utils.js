import GUI from "lil-gui";

/**
 * Handles the GUI debug panel implementation based on the url
 * @returns {Object} A GUI interface
 */

export const checkIfDebug = () => {
    if(window.location.hash === '#debug'){
        const gui = new GUI();
        return gui;
    };
};
