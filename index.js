``

    

        var swiper = new Swiper('.swiper-container', {
            // direction: 'vertical',
            slidesPerView: "auto",
            spaceBetween: 50,
            mousewheel: true,
            freeMode: true,
            // loop:true,
            scrollbar: {
                el: '.swiper-scrollbar',
                hide: true,
            },
        });



        var itemsImg = document.querySelectorAll(".items-img");
        var SwiperSlide = document.querySelectorAll(".swiper-slide");
        var itemsSwiperSlide = document.querySelectorAll(".items-swiper-slide");
        var itemsBannerContent = document.querySelectorAll(".items-banner-content");
        var itemsClose  = document.querySelectorAll(".items-close");
        var imgClose  = document.querySelectorAll(".img-close");
        
        
        

        itemsImg.forEach(function (element, index) {
            
            element.onclick = function () {
                //close all
                
                // closeAllImg();
                // closeAllContent();
                //image onclick,zoom in ,swiper change
                element.classList.toggle("active");
                swiper.slideTo(index);

                //find content  click add remove show-content
                // console.log(itemsBannerContent[index]);
                itemsBannerContent[index].classList.toggle("active");

                // var exist =itemsBannerContent[index].classList.contains("active");
                // itemsBannerContent[index].classList.toggle("active",!exist);
                
                // if(itemsBannerContent[element] == itemsBannerContent[element].active){
                // itemsBannerContent[index].classList.toggle("active");
                // }else{
                //     itemsBannerContent[index].classList.remove("active");
                // }
                SwiperSlide[index].classList.toggle("active");
                
                // if(itemsBannerContent == none){
                //     // closeAllContent();
                //     itemsBannerContent[index].classList.add("active");
                // }else{
                //     itemsBannerContent[index].classList.remove("active");
                //     // closeAllContent();
                // }
                

            }
        })
        
        



        function closeAllContent() {
            itemsClose.forEach(function (element, index) {
                element.classList.remove("active");
            })
        }

        function closeAllImg() {
            imgClose.forEach(function (element) {
                element.classList.remove("active");
            })
        }



        var myMouse = document.querySelectorAll(".mouse");
        myMouse.forEach(function (element, index) {
        element.onmouseover = function () {
            swiper.mousewheel.disable();
            // console.log(3)
        }})
        myMouse.forEach(function (element, index) {
        element.onmouseout = function () {
            swiper.mousewheel.enable();
            // console.log(3333)
        }})


    
