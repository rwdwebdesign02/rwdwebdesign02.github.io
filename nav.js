var mobileNavToggle = document.querySelector("#mobile_nav_toggle")
mobileNavToggle.onclick = function () {
    document.querySelector(".mobile_nav_item").classList.toggle('active');
}


var close_nav = document.querySelector("#close_nav")
close_nav.onclick = function () {
    document.querySelector(".close_nav").classList.toggle('active');
}
