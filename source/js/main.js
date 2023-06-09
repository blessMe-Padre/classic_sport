import { initCounter } from "./module/counter";
import { initGallery } from "./module/gallery";
import { initMainSlider } from "./module/main-slider";
import { initNav } from "./module/nav";
import { CustomSelect } from './select/custom-select';

window.addEventListener('DOMContentLoaded', () => {
    // Modules
    initNav();
    initMainSlider();
    initCounter();
    //custom select
    const select = new CustomSelect();
    select.init();
    initGallery();
});
