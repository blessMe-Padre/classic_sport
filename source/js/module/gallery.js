import '../vendor';

const initGallery = () => {
    // baguetteBox
    const gallery = document.querySelector('.product-gallery');
    if (gallery) {
        baguetteBox.run('.product-gallery');
    }
};

export { initGallery };

