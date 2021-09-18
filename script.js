document.getElementById("menu-bar").onclick = function() {myFunction()};
function myFunction() {
    document.getElementById("navigation").classList.toggle("show-menu");
    document.getElementById("menu-bar").classList.toggle("fa-times")
}

const navLink = document.querySelectorAll('.nav-link')
function linkAction(){
    const navMenu = document.getElementById('navigation')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))