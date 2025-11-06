// Lightbox for images and videos
document.addEventListener('DOMContentLoaded', function() {
    const mediaElements = document.querySelectorAll('.interactive-media[data-lightbox]');
    mediaElements.forEach(el => {
        el.addEventListener('click', function() {
            const lightbox = document.createElement('div');
            lightbox.style.position = 'fixed';
            lightbox.style.top = '0';
            lightbox.style.left = '0';
            lightbox.style.width = '100%';
            lightbox.style.height = '100%';
            lightbox.style.backgroundColor = 'rgba(0,0,0,0.8)';
            lightbox.style.display = 'flex';
            lightbox.style.alignItems = 'center';
            lightbox.style.justifyContent = 'center';
            lightbox.style.zIndex = '1000';
            
            const clone = el.cloneNode(true);
            lightbox.appendChild(clone);
            document.body.appendChild(lightbox);
            
            lightbox.addEventListener('