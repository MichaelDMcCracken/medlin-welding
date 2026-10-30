document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (toggleButton && navLinks) {
        function closeMenu() {
            navLinks.classList.remove('open');
            toggleButton.setAttribute('aria-expanded', 'false');
        }

        toggleButton.addEventListener('click', function () {
            navLinks.classList.toggle('open');
            const expanded = navLinks.classList.contains('open');
            toggleButton.setAttribute('aria-expanded', expanded);
        });

        navLinks.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', closeMenu);
        });

        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape' && navLinks.classList.contains('open')) {
                closeMenu();
                toggleButton.focus();
            }
        });
    }
});
