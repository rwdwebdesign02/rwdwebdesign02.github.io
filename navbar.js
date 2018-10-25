var mobileNavToggle = document.querySelector("#mobile_nav_toggle")
mobileNavToggle.onclick = function () {
    console.log("test")
    document.querySelector(".mobile_nav_item").classList.toggle('active');
}


var close_nav = document.querySelector("#close_nav")


close_nav.onclick = function () {
    console.log("test");
    document.querySelector(".mobile_nav_item").classList.toggle('active');
}
