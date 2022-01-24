const scrollFunc = () => {
    const links = document.querySelectorAll('.header-menu__item a');
    const allCharater = document.querySelector('.card-details__link-characteristics');

    seamless.polyfill();

    links.forEach((element) => {
        element.addEventListener('click', (event) => {
            event.preventDefault();

            const id = element.getAttribute('href').substring(1);
            const section = document.getElementById(id);

            if (section) {
                seamless.elementScrollIntoView(section, {
                    behavior: "smooth",
                    block: "start"
                })
            }
        })
    })

    allCharater.addEventListener('click', (event) => {
        event.preventDefault();

        const allCharaterId = allCharater.getAttribute('href').substring(1);
        const allCharaterSection = document.getElementById(allCharaterId);

        seamless.elementScrollIntoView(allCharaterSection, {
            behavior: "smooth",
            block: "start"
        })
    })
}

scrollFunc();