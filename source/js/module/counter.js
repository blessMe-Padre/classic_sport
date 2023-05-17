const initCounter = () => {
    const input = document.querySelector('.counter__input');
    const btnMinus = document.querySelector('.counter__btn--minus');
    const btnPlus = document.querySelector('.counter__btn--plus');

    btnMinus.addEventListener('click', (e) => {
        e.preventDefault();
        input.value--;
        // disabled на кнопки
        if (input.value <= 0) {
            input.value = 0;
            btnMinus.setAttribute('disabled', 'disabled');
        } else {
            btnMinus.removeAttribute('disabled', 'disabled');
        }
    });

    btnPlus.addEventListener('click', (e) => {
        e.preventDefault();
        btnMinus.removeAttribute('disabled', 'disabled');
        input.value++;
    });
};

export { initCounter };