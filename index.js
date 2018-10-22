
if (window.innerWidth < 632) {
  console.log(window.innerWidth, "<632")
  window.location.assign("/m-index.html");
}


var swiper = new Swiper(".swiper-container", {
  // direction: 'vertical',
  slidesPerView: "auto",
  spaceBetween: 50,
  mousewheel: true,
  freeMode: true,
  // loop:true,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true
  }
});

var itemsImg = document.querySelectorAll(".items-img");
var SwiperSlide = document.querySelectorAll(".swiper-slide");

var itemsClose = document.querySelectorAll(".items-close");
var imgClose = document.querySelectorAll(".img-close");

itemsImg.forEach(function (element, index) {
  element.onclick = function () {
    //close all

    closeAllImg(index);
    closeAllContent(index);
    toggleSwiperSlide(index);
    swiper.slideTo(index);


  };
});

function closeAllContent(indexClicked) {
  itemsClose.forEach(function (element, index) {
    if (indexClicked == index && !element.classList.contains("active")) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });
}

function closeAllImg(indexClicked) {
  imgClose.forEach(function (element, index) {
    if (indexClicked == index && !element.classList.contains("active")) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });
}

function toggleSwiperSlide(indexClicked) {
  SwiperSlide.forEach(function (element, index) {
    if (indexClicked == index && !element.classList.contains("active")) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });
}




var myMouse = document.querySelectorAll(".mouse");
myMouse.forEach(function (element, index) {
  element.onmouseover = function () {
    swiper.mousewheel.disable();
    // console.log(3)
  };
});
myMouse.forEach(function (element, index) {
  element.onmouseout = function () {
    swiper.mousewheel.enable();
    // console.log(3333)
  };
});
