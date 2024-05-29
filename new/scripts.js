document.addEventListener('DOMContentLoaded', () => {
    const events = document.querySelectorAll('.timeline-event');
    const popup = document.getElementById('popup');
    const popupTitle = document.getElementById('popup-title');
    const popupDescription = document.getElementById('popup-description');
    const popupImage = document.getElementById('popup-image');
    const closeBtn = document.querySelector('.close');

    events.forEach(event => {
        event.addEventListener('click', () => {
            const title = event.getAttribute('data-title');
            const description = event.getAttribute('data-description');
            const image = event.getAttribute('data-image');

            popupTitle.textContent = title;
            popupDescription.textContent = description;
            popupImage.src = image;

            popup.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    });
});
