document.getElementById("menu-bar").onclick = function() {myFunction()};
function myFunction() {
    document.getElementById("navigation").classList.toggle("show-menu");
}


const navLink = document.querySelectorAll('.nav-link')
function linkAction(){
    const navMenu = document.getElementById('navigation')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))