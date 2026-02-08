document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const photo = document.getElementById('photo');
    const celebration = document.getElementById('celebration');

    const photos = [
        'https://i.ibb.co/JjY9C9tJ/Whats-App-Image-2026-02-08-at-18-16-25-1.jpg',
        'https://i.ibb.co/m5WWy927/Whats-App-Image-2026-02-08-at-18-16-25.jpg',
        'https://i.ibb.co/Z1Hv29MC/Whats-App-Image-2026-02-08-at-18-16-26-1.jpg',
        'https://i.ibb.co/bjHgC67N/Whats-App-Image-2026-02-08-at-18-16-26.jpg',
        'https://i.ibb.co/Y4kYXKcF/Whats-App-Image-2026-02-08-at-18-16-26-2.jpg',
        'https://i.ibb.co/Mktk4KC8/Whats-App-Image-2026-02-08-at-18-16-27-1.jpg',
        'https://i.ibb.co/BVS1w7Xy/Whats-App-Image-2026-02-08-at-18-16-27-2.jpg',
        'https://i.ibb.co/MkmKZbs5/Whats-App-Image-2026-02-08-at-18-16-27-3.jpg',
        'https://i.ibb.co/mV34Qp56/Whats-App-Image-2026-02-08-at-18-16-27.jpg',
        'https://i.ibb.co/N6k20WWY/Whats-App-Image-2026-02-08-at-18-16-28-1.jpg',
        'https://i.ibb.co/FLkcXV0Y/Whats-App-Image-2026-02-08-at-18-16-28.jpg'
    ];

    const noTexts = [
        'Please',
        "Don't break my heart",
        'Think about it',
        'Pretty please',
        "I promise it'll be fun",
        "Look how happy we are"
    ];

    let photoIndex = 0;
    let textIndex = 0;
    let yesScale = 1;
    let imagesLoaded = 0;

    // 🔒 Disable buttons until preload finishes
    yesBtn.disabled = true;
    noBtn.disabled = true;

    // ✅ REAL preload (waits for all images)
    photos.forEach((src) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
            imagesLoaded++;
            if (imagesLoaded === photos.length) {
                yesBtn.disabled = false;
                noBtn.disabled = false;
            }
        };
    });

    noBtn.addEventListener('click', () => {
        photoIndex = (photoIndex + 1) % photos.length;
        photo.src = photos[photoIndex];

        textIndex = (textIndex + 1) % noTexts.length;
        noBtn.textContent = noTexts[textIndex];

        yesScale += 0.4;
        yesBtn.style.transform = `scale(${yesScale})`;
    });

    yesBtn.addEventListener('click', () => {
        document.querySelector('#photos-container').style.display = 'none';
        document.querySelector('.buttons').style.display = 'none';
        celebration.style.display = 'block';
    });
});
