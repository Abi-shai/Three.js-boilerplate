import GUI from "lil-gui";

export const checkIfDebug = () => {
    if(window.location.hash === '#debug'){
        const gui = new GUI();
        return gui;
    };
};
