const menu_mobile = document.querySelector(".menu-mobile");
const menu_icon = document.querySelector("#menu-icon");
const menu_link = document.querySelector(".menu-link");

menu_mobile.addEventListener('click', () => {
    if (menu_icon.classList.contains('fa-bars')) {
        menu_icon.classList.remove('fa-bars');
        menu_icon.classList.add('fa-x');
    } else {
        menu_icon.classList.remove('fa-x');
        menu_icon.classList.add('fa-bars');
    }

    menu_link.classList.toggle('show');
});
