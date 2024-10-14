document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');
    const showcaseLink = document.getElementById('showcase-link');

    const links = [
        { href: "/pages/homepage/index.html", text: "Home", active: true },
        { href: "/pages/products/products.html", text: "Products" },
        { href: "/pages/about-us/about-us.html", text: "About Us" },
        { href: "/pages/contact/contact.html", text: "Contact" },
        { href: "/pages/references/references.html", text: "References" }
    ];

    links.forEach(link => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = link.href;
        a.textContent = link.text;
        if (link.active) {
            a.classList.add('active');
        }
        li.appendChild(a);
        navbar.appendChild(li);
    });


    showcaseLink.href = "/pages/products/products.html";


    menuIcon.addEventListener('click', function () {

        navbar.classList.toggle('open');
        menuIcon.classList.toggle('open');


        if (navbar.classList.contains('open')) {
            menuIcon.style.transform = 'rotate(90deg)';
        } else {
            menuIcon.style.transform = 'rotate(0deg)';
        }
    });
});
