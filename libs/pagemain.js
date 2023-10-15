$('.hit-section .product-list__slider').get(1).slick.destroy();
$('.hit-section .product-list__slider').get(2).slick.destroy();
$('.hit-section .product-list__slider').get(3).slick.destroy();
var $widthW = $(window).width();
if ($widthW < 481) {
  $('.tags-block__slider .js-tab-trigger').eq(0).trigger('click');
}

$('.hit__top .js-tab-trigger').on("click", function () {
  if ($('.hit__top .js-tab-trigger').eq(0).hasClass("active")) {
      SliderProduct($('.hit-section .product-list__slider').eq(0));
      $('.hit-section .product-list__slider').get(1).slick.destroy();
      $('.hit-section .product-list__slider').get(2).slick.destroy();
      $('.hit-section .product-list__slider').get(3).slick.destroy();
  }
  else if ($('.hit__top .js-tab-trigger').eq(1).hasClass("active")) {
      $('.hit-section .product-list__slider').get(0).slick.destroy();
      SliderProduct($('.hit-section .product-list__slider').eq(1));
      $('.hit-section .product-list__slider').get(2).slick.destroy();
      $('.hit-section .product-list__slider').get(3).slick.destroy();
  }
  else if ($('.hit__top .js-tab-trigger').eq(2).hasClass("active")) {
      $('.hit-section .product-list__slider').get(0).slick.destroy();
      $('.hit-section .product-list__slider').get(1).slick.destroy();
      SliderProduct($('.hit-section .product-list__slider').eq(2));
      $('.hit-section .product-list__slider').get(3).slick.destroy();
  }
  else if ($('.hit__top .js-tab-trigger').eq(3).hasClass("active")) {
      $('.hit-section .product-list__slider').get(0).slick.destroy();
      $('.hit-section .product-list__slider').get(1).slick.destroy();
      $('.hit-section .product-list__slider').get(2).slick.destroy();
      SliderProduct($('.hit-section .product-list__slider').eq(3));
  }
});

$('.tags-block__slider .js-tab-trigger').on("click", function () {
  if ($('.tags-block__slider .js-tab-trigger').eq(0).hasClass("active")) {
      SliderProduct($('.hit-section .product-list__slider').eq(0));
      $('.hit-section .product-list__slider').get(1).slick.destroy();
      $('.hit-section .product-list__slider').get(2).slick.destroy();
      $('.hit-section .product-list__slider').get(3).slick.destroy();
  }
  else if ($('.tags-block__slider .js-tab-trigger').eq(1).hasClass("active")) {
      $('.hit-section .product-list__slider').get(0).slick.destroy();
      SliderProduct($('.hit-section .product-list__slider').eq(1));
      $('.hit-section .product-list__slider').get(2).slick.destroy();
      $('.hit-section .product-list__slider').get(3).slick.destroy();
  }
  else if ($('.tags-block__slider .js-tab-trigger').eq(2).hasClass("active")) {
      $('.hit-section .product-list__slider').get(0).slick.destroy();
      $('.hit-section .product-list__slider').get(1).slick.destroy();
      SliderProduct($('.hit-section .product-list__slider').eq(2));
      $('.hit-section .product-list__slider').get(3).slick.destroy();
  }
  else if ($('.tags-block__slider .js-tab-trigger').eq(3).hasClass("active")) {
      $('.hit-section .product-list__slider').get(0).slick.destroy();
      $('.hit-section .product-list__slider').get(1).slick.destroy();
      $('.hit-section .product-list__slider').get(2).slick.destroy();
      SliderProduct($('.hit-section .product-list__slider').eq(3));
  }
});

function SliderProduct(slidItem) {
  if (!$(slidItem).hasClass("slick-initialized")) {
      slidItem.slick({
          speed: 500,
          infinite: true,
          slidesToShow: 6,
          dots: false,
          prevArrow: '<button type="button" class="slick-prev"></button>',
          nextArrow: '<button type="button" class="slick-next"></button>',
          responsive: [
              {
                  breakpoint: 1600,
                  settings: {
                      slidesToShow: 5,
                  }
              },
              {
                  breakpoint: 1025,
                  settings: {
                      slidesToShow: 5,
                      dots: true,
                      arrows: false,
                  }
              },
              {
                  breakpoint: 769,
                  settings: {
                      variableWidth: true,
                      slidesToShow: 2,
                      dots: true,
                      arrows: false,
                  }
              },
              {
                  breakpoint: 361,
                  settings: {
                      slidesToShow: 1,
                      dots: true,
                      arrows: false,
                  }
              }
          ]
      });
  }
}