document.addEventListener('DOMContentLoaded', () => {
    const hoverLink = document.querySelectorAll('.btn');
    const img = document.querySelector('.btn-img');

    hoverLink.addEventListener('mouseover', () => {
        img.style.transform = 'rotate(45deg)';
    });

    hoverLink.addEventListener('mouseout', () => {
        img.style.transform = 'rotate(0deg)';
    });
});