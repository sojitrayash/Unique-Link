// script.js
const linkItems = document.querySelectorAll('.link-item');

linkItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.querySelector('.link-animation').style.animation = 'stretch 0.5s forwards';
    });

    item.addEventListener('mouseout', () => {
        item.querySelector('.link-animation').style.animation = 'shrink 0.5s forwards';
    });
});
