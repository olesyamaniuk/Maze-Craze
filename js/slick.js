$(function () {
  $(".w-l-gallery-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: false,
    centerMode: true,
    cssEase: "linear",
    prevArrow: ".w-l-gallery-list-left",
    nextArrow: ".w-l-gallery-list-right",
  });
});

$(function () {
  $(".w-l-reviews-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    centerMode: true,
    cssEase: "linear",
    prevArrow: ".w-l-reviews-list-left",
    nextArrow: ".w-l-reviews-list-right",
  });
});
