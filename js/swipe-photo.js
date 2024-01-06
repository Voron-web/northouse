import PhotoSwipeLightbox from './photoswipe-lightbox.esm.min.js';
const options = {
    gallery: '#gallery--responsive-images',
    children: 'a',
    pswpModule: () => import('./photoswipe.esm.min.js')
};
const lightbox = new PhotoSwipeLightbox(options);
lightbox.init();