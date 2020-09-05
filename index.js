
function navToggle() {
    const burger = document.querySelector('.burgerMenu');
    const nav = document.querySelector('ul');
    const navLinks = document.querySelectorAll('.navLinks');
    
    burger.addEventListener('click', () => {
        // Toggle Navbar
        nav.classList.toggle('nav-active');

        //Anitmate Navlinks
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 9 + 0.5}s`;
            }
        })
    })
}

navToggle();


