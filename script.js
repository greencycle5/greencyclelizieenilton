// Ampliação de imagens da galeria ao clicar
const galleryImages = document.querySelectorAll('.profile-gallery img');

galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        const overlay = document.createElement('div');
        overlay.classList.add('overlay');
        const enlargedImage = document.createElement('img');
        enlargedImage.src = img.src;
        enlargedImage.alt = img.alt;
        overlay.appendChild(enlargedImage);
        document.body.appendChild(overlay);

        overlay.addEventListener('click', () => {
            document.body.removeChild(overlay);
        });
    });
});

// Estilo para o overlay
const style = document.createElement('style');
style.textContent = `
    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }
    .overlay img {
        max-width: 90%;
        max-height: 90%;
        border-radius: 10px;
    }
`;
document.head.appendChild(style);
