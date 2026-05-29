const slider = document.querySelector('.event-grid');
const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.right');

if (slider && leftBtn && rightBtn) {

    rightBtn.addEventListener('click', () => {

        slider.scrollBy({
            left:300,
            behavior:'smooth'
        });

    });

    leftBtn.addEventListener('click', () => {

        slider.scrollBy({
            left:-300,
            behavior:'smooth'
        });

    });

}