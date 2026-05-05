window.onload = () => {
    setTimeout(() => {
        const loader = document.getElementById('loader');
        const content = document.querySelector('.main-content');
        
        loader.style.opacity = '0'; // Tonar ut loadern
        setTimeout(() => {
            loader.style.display = 'none';
            content.classList.add('show-content'); // Tonar in din sida
        }, 1000);
    }, 3000); // 3 sekunder loading
};
