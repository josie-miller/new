document.addEventListener('DOMContentLoaded', () => {
    const events = document.querySelectorAll('.timeline-event');
    const braindumpSections = document.querySelectorAll('.braindump-section');
    const popup = document.getElementById('popup');
    const popupTitle = document.getElementById('popup-title');
    const popupDescription = document.getElementById('popup-description');
    const popupImage = document.getElementById('popup-image');
    const closeBtns = document.querySelectorAll('.close');
    const galleryItems = document.querySelectorAll('.gallery-item');

    // Function to show the popup with provided content
    function showPopup(title, description, image) {
        popupTitle.textContent = title;
        popupDescription.textContent = description;
        if (image) {
            popupImage.src = image;
            popupImage.style.display = 'block';
        } else {
            popupImage.style.display = 'none';
        }
        popup.style.display = 'block';
    }

    events.forEach(event => {
        event.addEventListener('click', () => {
            const title = event.getAttribute('data-title');
            const description = event.getAttribute('data-description');
            const image = event.getAttribute('data-image');
            showPopup(title, description, image);
        });
    });

    braindumpSections.forEach(section => {
        section.addEventListener('click', () => {
            const title = section.querySelector('h3').textContent;
            const description = section.getAttribute('data-full-text');
            showPopup(title, description, null);
        });
    });

    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            popup.style.display = 'none';
        });
    });

    window.addEventListener('click', (event) => {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    });

    // Apply random rotation to gallery items
    galleryItems.forEach(item => {
        const rotation = (Math.random() - 0.5) * 10; // Random rotation between -5 and 5 degrees
        item.style.transform = `rotate(${rotation}deg)`;
    });

    // Add an easter egg
    const easterEgg = document.createElement('div');
    easterEgg.textContent = "You found the easter egg!";
    easterEgg.style.position = 'fixed';
    easterEgg.style.bottom = '10px';
    easterEgg.style.right = '10px';
    easterEgg.style.padding = '10px';
    easterEgg.style.backgroundColor = '#ffcccb';
    easterEgg.style.border = '2px dashed #f08080';
    easterEgg.style.borderRadius = '10px';
    easterEgg.style.display = 'none';
    document.body.appendChild(easterEgg);

    document.body.addEventListener('dblclick', () => {
        easterEgg.style.display = 'block';
    });

    easterEgg.addEventListener('click', () => {
        easterEgg.style.display = 'none';
    });
});
