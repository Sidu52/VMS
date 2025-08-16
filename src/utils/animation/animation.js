// utils/animations.js
export const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" }
    }
};

export const fadeOutDown = {
    hidden: { opacity: 0, y: -30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" }
    }
};

export const zoomIn = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: { duration: 0.3 }
    }
};

export const zoomOut = {
    hidden: { scale: 1.05, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: { duration: 0.3 }
    }
};

export const slideInLeft = {
    hidden: { x: "-100%", opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.4, ease: "easeOut" }
    }
};

export const slideOutLeft = {
    hidden: { x: 0, opacity: 1 },
    visible: {
        x: "-100%",
        opacity: 0,
        transition: { duration: 0.4, ease: "easeIn" }
    }
};
