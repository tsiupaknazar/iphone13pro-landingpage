const accordeon = () => {
    const chItems = document.querySelectorAll('.characteristics__item');

    chItems.forEach(item => {
        const chButton = item.querySelector('.characteristics__title');
        const chContent = item.querySelector('.characteristics__description');

        chButton.addEventListener('click', () => {
            // Сворачивание ранее открытых секций
            chItems.forEach(openItem => {
                if (openItem === item) return;
                const chButtonActive = openItem.querySelector('.characteristics__title');
                const chContentOpen = openItem.querySelector('.characteristics__description');
                if (chContentOpen.classList.contains('open')) {
                    chContentOpen.style.height = '';
                    chButtonActive.classList.remove('active');
                    chContentOpen.classList.remove('open');
                }
            });

            if (chContent.classList.contains('open')) {
                chContent.style.height = '';
            } else {
                chContent.style.height = chContent.scrollHeight + 'px';
            }

            chButton.classList.toggle('active');
            chContent.classList.toggle('open');
        });
    });
};

accordeon();