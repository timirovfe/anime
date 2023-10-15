// ----------------scroll href-----------------------
var linkNav = document.querySelectorAll('[href^="#"]'),
    V = 1;
for (var i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function(e) {
        e.preventDefault();
        var w = window.pageYOffset,
            hash = this.href.replace(/[^#]*(.*)/, '$1');
        t = document.querySelector(hash).getBoundingClientRect().top,
            start = null;
        requestAnimationFrame(step);
        function step(time) {
            if (start === null) start = time;
            var progress = time - start,
                r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
            window.scrollTo(0,r);
            if (r != w + t) {
                requestAnimationFrame(step)
            } else {
                location.hash = hash
            }
        }
    }, false);
}

// ----------------menu-----------------------

function openNav() {
    document.getElementById("myNav").classList.add("myNav-active");
    document.querySelector(".overlay-back").classList.add("active");
    document.body.classList.add('body-overflow');

    const windowOuterWidth = window.outerWidth;
    if (windowOuterWidth < 768) {
        const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
        const body = document.body;
        body.style.position = 'fixed';
        body.style.top = `-${scrollY}`;
    }
}

function closeNav() {
    document.getElementById("myNav").classList.remove("myNav-active");
    document.querySelector(".overlay-back").classList.remove("active");
    document.body.classList.remove('body-overflow');

    const windowOuterWidth = window.outerWidth;
    if (windowOuterWidth < 768) {
        const body = document.body;
        const scrollY = body.style.top;
        body.style.position = '';
        body.style.top = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
};

$(document).mouseup(function (e) {
    if($(".header__overlay").hasClass("myNav-active")) {
        var container = $(".myNav-active");
        if (container.has(e.target).length === 0){
            container.removeClass('myNav-active');
            $(".overlay-back").removeClass('active');
            $('body,html').removeClass('body-overflow');
            console.log('123');
        }
	}
});

window.addEventListener('scroll', () => {
    document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
});



const showDialog = () => {
    document.getElementById('dialog').classList.add('show')
    const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
    const body = document.body;
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}`;
  };
  const closeDialog = () => {
    const body = document.body;
    const scrollY = body.style.top;
    body.style.position = '';
    body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
    document.getElementById('dialog').classList.remove('show');
  }
  window.addEventListener('scroll', () => {
    document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
  });



function openFilter() {
    document.getElementById("trading-filter").classList.add("trading-active");
    document.querySelector(".overlay-back").classList.add("active");
    document.body.classList.add('body-overflow');

    const windowOuterWidth = window.outerWidth;
    if (windowOuterWidth < 768) {
        const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
        const body = document.body;
        body.style.position = 'fixed';
        body.style.top = `-${scrollY}`;
    }
}

function closeFilter() {
    document.getElementById("trading-filter").classList.remove("trading-active");
    document.querySelector(".overlay-back").classList.remove("active");
    document.body.classList.remove('body-overflow');

    const windowOuterWidth = window.outerWidth;
    if (windowOuterWidth < 768) {
        const body = document.body;
        const scrollY = body.style.top;
        body.style.position = '';
        body.style.top = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
};

$(document).mouseup(function (e) {
    if($(".trading__overlay").hasClass("trading-active")) {
        var container2 = $(".trading-active");
        if (container2.has(e.target).length === 0){
            container2.removeClass('trading-active');
            if(!$(".pandoge").hasClass("www")) {
                $(".overlay-back").removeClass('active');
                $('body,html').removeClass('body-overflow');
            }
            console.log('123');
        }
    }
});

// ----------------spoiler-----------------------

function view(element, n) {
    element.classList.toggle("active");
    style = document.getElementById(n).style;
    style.display = (style.display == 'block') ? 'none' : 'block';
}

// ----------------date-----------------------

let DataYears = new Date();
document.querySelector('.footer__date').innerHTML = "Nani © " + DataYears.getFullYear() +" Все права защищены"

// ---------------btn-more-------------------

// document.querySelector('.catalog__more').onclick = moreBlock();

function moreBlock() {
    let moreItem = document.querySelectorAll('.catalog__item');
    for (let i = 0; i < moreItem.length; i++) {
        moreItem[i].style.display = 'block';
    }
    document.querySelector('.catalog__more').style.display = 'none';
}

// ---------------header-------------------

// Когда пользователь прокручивает страницу, выполняем myFunction
window.onscroll = function() {myFunction()};

// Получаем шапку
var header = document.getElementById("header");

// Получаем позицию элемента
var sticky = header.offsetTop;

// Добавляем класс sticky, когда шапка достигнет нужной позиции.
// Удаляем класс sticky, когда шапка уйдет с этой позиции.
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
// ----------------spoiler_list-----------------------

function viewList(element, n) {
    style = document.getElementById(n).style;
    style.display = (style.display == 'block') ? 'none' : 'block';

    styleBtn = document.getElementsByClassName(n);
    console.log(styleBtn[0]);
    styleBtn[0].classList.toggle('d-none');

}

// ----------------accordion-catalog-----------------------
const windowWidth = window.outerWidth;
if (windowWidth < 1025) {
    var acc = document.getElementsByClassName("shop__acardion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
        });
    }
}

// input close


let headerSearch = document.querySelector(".header__search");

headerSearch.oninput = function() {
    if (headerSearch.value.length >= 2) {
        headerSearch.classList.add('active');
    }
    else {
        headerSearch.classList.remove('active');
    }
};

headerSearch.onblur = function() {
  setTimeout(headRemove, 200);
  function headRemove () {
    headerSearch.classList.remove('active');
  }
};

document.querySelector(".header__toclose").onclick = function(){
    headerSearch.value = "";
}

let headerSearchMob = document.querySelector(".header__search_mob");

headerSearchMob.oninput = function() {
    if (headerSearchMob.value.length >= 2) {
        headerSearchMob.classList.add('active');
    }
    else {
        headerSearchMob.classList.remove('active');
    }
};

headerSearchMob.onblur = function() {
  setTimeout(headRemove, 200);
  function headRemove () {
    headerSearchMob.classList.remove('active');
  }
};

document.querySelector(".header__overlay-content .header__toclose").onclick = function(){
    headerSearchMob.value = "";
}

//btn-top

$(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();
        } 
        else {
            $('#toTop').fadeOut();
        }});
    $('#toTop').click(function() {
  $('body,html').animate({scrollTop:0},800);});
});

// tabs

var jsTriggers = document.querySelectorAll('.js-tab-trigger'),
    jsContents = document.querySelectorAll('.js-tab-content');

jsTriggers.forEach(function(trigger) {
   trigger.addEventListener('click', function() {
      var id = this.getAttribute('data-tab'),
          content = document.querySelector('.js-tab-content[data-tab="'+id+'"]'),
          activeTrigger = document.querySelector('.js-tab-trigger.active'),
          activeContent = document.querySelector('.js-tab-content.active');
      
      activeTrigger.classList.remove('active');
      trigger.classList.add('active');
      
      activeContent.classList.remove('active');
      content.classList.add('active');
   });
});

// ---------CustomScrollbar
$(".header__overlay-btn").mCustomScrollbar({
    axis: "y",              // вертикальный скролл
    theme: "light-thin",  // тема
    scrollInertia: "1200",   // продолжительность прокрутки, значение в миллисекундах
    setHeight: "70%",      // высота блока (переписывает CSS)
    mouseWheel: {
        deltaFactor: 100    // кол-во пикселей на одну прокрутку колёсика мыши
    }
});

// ---------modal

!function(e){"function"!=typeof e.matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window.Element.prototype);


document.addEventListener('DOMContentLoaded', function() {
    const windowOuterWidth = window.outerWidth;

   /* Записываем в переменные массив элементов-кнопок и подложку.
      Подложке зададим id, чтобы не влиять на другие элементы с классом overlay*/
   var modalButtons = document.querySelectorAll('.js-open-modal'),
       overlay      = document.querySelector('.js-overlay-modal'),
       closeButtons = document.querySelectorAll('.js-modal-close');


   /* Перебираем массив кнопок */
   modalButtons.forEach(function(item){

      /* Назначаем каждой кнопке обработчик клика */
      item.addEventListener('click', function(e) {

         /* Предотвращаем стандартное действие элемента. Так как кнопку разные
            люди могут сделать по-разному. Кто-то сделает ссылку, кто-то кнопку.
            Нужно подстраховаться. */
         e.preventDefault();

         /* При каждом клике на кнопку мы будем забирать содержимое атрибута data-modal
            и будем искать модальное окно с таким же атрибутом. */
         var modalId = this.getAttribute('data-modal'),
             modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');


         /* После того как нашли нужное модальное окно, добавим классы
            подложке и окну чтобы показать их. */
         modalElem.classList.add('active');
         overlay.classList.add('active');
         const windowOuterWidth = window.outerWidth;
        if (windowOuterWidth < 481) {
            const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
            const body = document.body;
            body.style.position = 'fixed';
            body.style.top = `-${scrollY}`;
        }
      }); // end click

   }); // end foreach


   closeButtons.forEach(function(item){

      item.addEventListener('click', function(e) {
         var parentModal = this.closest('.modal');

         parentModal.classList.remove('active');
         overlay.classList.remove('active');
         document.body.classList.remove('body-overflow');
         const windowOuterWidth = window.outerWidth;
        if (windowOuterWidth < 768) {
            const body = document.body;
            const scrollY = body.style.top;
            body.style.position = '';
            body.style.top = '';
            window.scrollTo(0, parseInt(scrollY || '0') * -1);
        }
      });

   }); // end foreach


    document.body.addEventListener('keyup', function (e) {
        var key = e.keyCode;

        if (key == 27) {

            document.querySelector('.modal.active').classList.remove('active');
            document.querySelector('.overlay').classList.remove('active');
            document.body.classList.remove('body-overflow');
        };
    }, false);


    overlay.addEventListener('click', function() {
        document.querySelector('.modal.active').classList.remove('active');
        this.classList.remove('active');
        document.body.classList.remove('body-overflow');
    });
}); 

// ----------------accordion-----------------------
var acc = document.getElementsByClassName("accordion-item");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
    });
}

// ---------CustomScrollbar
$(".trading_choice-list").mCustomScrollbar({
    axis: "y",              // вертикальный скролл
    theme: "light-thin",  // тема
    scrollInertia: "1200",   // продолжительность прокрутки, значение в миллисекундах
    mouseWheel: {
        deltaFactor: 50    // кол-во пикселей на одну прокрутку колёсика мыши
    }
});

// ---------CustomScrollbar
$(".trading_choice").mCustomScrollbar({
    axis: "y",              // вертикальный скролл
    theme: "light-thin",  // тема
    scrollInertia: "1200",   // продолжительность прокрутки, значение в миллисекундах
    mouseWheel: {
        deltaFactor: 100    // кол-во пикселей на одну прокрутку колёсика мыши
    }
});

// ---------------btn-more-------------------

// document.querySelector('.catalog__more').onclick = moreBlock();

// function moreTrading() {
//     let moreItem = document.querySelectorAll('.card__item');
//     for (let i = 0; i < moreItem.length; i++) {
//         moreItem[i].style.display = 'block';
//     }
//     document.querySelector('.trading__nav').style.display = 'none';
// }


// selector
$('.dropdown').click(function () {
    $(this).attr('tabindex', 1).focus();
    $(this).toggleClass('active');
    $(this).find('.dropdown-menu').slideToggle(300);
});
$('.dropdown').focusout(function () {
    $(this).removeClass('active');
    $(this).find('.dropdown-menu').slideUp(300);
});
$('.dropdown .dropdown-menu li').click(function () {
    $(this).parents('.dropdown').find('span').text($(this).text());
    $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
});
/*End Dropdown Menu*/


$('.dropdown-menu li').click(function () {
var input = '<strong>' + $(this).parents('.dropdown').find('input').val() + '</strong>',
  msg = '<span class="msg">Hidden input value: ';
$('.msg').html(msg + input + '</span>');
});


// form-tel
window.addEventListener("DOMContentLoaded", function() {
    [].forEach.call( document.querySelectorAll('.form-tel'), function(input) {
    var keyCode;
    function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        var pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        var matrix = "+7 (___) ___ ____",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function(a) {
                return i < val.length ? val.charAt(i++) || def.charAt(i) : a
            });
        i = new_value.indexOf("_");
        if (i != -1) {
            i < 5 && (i = 3);
            new_value = new_value.slice(0, i)
        }
        var reg = matrix.substr(0, this.value.length).replace(/_+/g,
            function(a) {
                return "\\d{1," + a.length + "}"
            }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
        if (event.type == "blur" && this.value.length < 5)  this.value = ""
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false)

  });
});

document.querySelectorAll('.header__connect').forEach(
    item => item.addEventListener('click', function() {
        document.getElementById("myNav").classList.remove("myNav-active");
        document.querySelector(".overlay-back").classList.remove("active");
        document.body.classList.remove('body-overflow');
    })
);

// form-authorization
function ValidForm() {
    let inputValue = document.querySelector('.form-tel');
    let checkValue = document.querySelector('.modal__form-checkbox');
    if (inputValue.value.length < 17){
        document.querySelector('.modal__tel-block').classList.add('error-tel_active');
    }
    if (inputValue.value.length >= 17) {
        document.querySelector('.modal__tel-block').classList.remove('error-tel_active');
    }
    if (checkValue.checked == false) {
        document.querySelector('.modal__checkbox').classList.add('modal__checkbox_error');
    }
    if (checkValue.checked == true) {
        document.querySelector('.modal__checkbox').classList.remove('modal__checkbox_error');
    }
    if (inputValue.value.length >= 17) {
        if (checkValue.checked == true) {
            smsForm();
        }
    }
}
function smsForm() {
    document.querySelector('.modal[data-modal="1"] .js-modal-close').click();
    document.querySelector('.modal3').click();
}

$('.sms-input:first-child').focus();

$('.sms-input').on('keydown', function(e) {
  let value = $(this).val();
  let len = value.length;
  let curTabIndex = parseInt($(this).attr('tabindex'));
  let nextTabIndex = curTabIndex + 1;
  let prevTabIndex = curTabIndex - 1;
  if (len > 0) {
    $(this).val(value.substr(0, 1));
    $('[tabindex=' + nextTabIndex + ']').focus();
  } else if (len == 0 && prevTabIndex !== 0) {
    $('[tabindex=' + prevTabIndex + ']').focus();
  }
});

function ValidSms() {
    let smsValue = document.querySelector(".sms-input:last-child");
    if(smsValue.value !== "") {
        document.querySelector('.signin-sms__wrap').classList.remove('signin-sms__wrap_error');
        endForm();
    }
    else {
        document.querySelector('.signin-sms__wrap').classList.add('signin-sms__wrap_error');
    }
}

function endForm() {
    document.querySelector('.modal[data-modal="3"] .js-modal-close').click();
    document.querySelector('.modal4').click();
}

function newNumber() {
    document.querySelector('.modal[data-modal="3"] .js-modal-close').click();
    document.querySelector('.modal1').click();
}


// remove-modal_cart
let windowsWidth = window.outerWidth;
if (windowsWidth < 769) {
    let AllCart = document.querySelectorAll(".card__item .js-open-modal");
    for (let i = 0; i < AllCart.length; i++) {
        delete AllCart[i].dataset.modal;
        delete AllCart[i].classList.remove('js-open-modal');
    }
}

document.querySelectorAll('.card__buttons-like').forEach(
    item => item.addEventListener('click', function() {
        this.classList.toggle('active');
    })
);

document.querySelectorAll('.modal__cart-like').forEach(
    item => item.addEventListener('click', function() {
        this.classList.toggle('active');
    })
);

document.querySelectorAll('.product-cart__favourites').forEach(
    item => item.addEventListener('click', function() {
        this.classList.toggle('active');
    })
);

var parts = 'http://mywebsite/folder/file'.split('/');
var lastSegment = parts.pop() || parts.pop();  // handle potential trailing slash

function moreSpecifications() {
    document.querySelectorAll(".product-cart__more-top .js-tab-trigger")[1].click();
}