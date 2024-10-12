document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', function () {
        // Toggle the 'open' class on the navbar
        navbar.classList.toggle('open');
        
        // Change the hamburger icon to a close (X) icon when clicked
        if (navbar.classList.contains('open')) {
            menuIcon.classList.add('bx-x'); // Add close icon
            menuIcon.classList.remove('bx-menu'); // Remove hamburger icon
        } else {
            menuIcon.classList.add('bx-menu'); // Add hamburger icon back
            menuIcon.classList.remove('bx-x'); // Remove close icon
        }
    });
});
