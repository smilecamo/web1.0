$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 1,                 // 显示图片数量
        loop: true,           //
        autoplay: true,          //动画开始
        autoplayTimeout: 1000,      // 时间
        smartSpeed: 450,
      autoplayHoverPause: true   // 鼠标悬停
    });
});
