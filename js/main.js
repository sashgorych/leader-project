if (screen.width > 1280) {
    //menu hover
    let timer;
    $('.menu2>li').mouseenter(function () {
        clearTimeout(timer);
        $(this).addClass('active');
        $('body').addClass('active');
    }).mouseleave(function () {
        timer = setTimeout(function () {
            $(this).removeClass('active')
            $('body').removeClass('active');
        }, 500)


    })
    //default activated first submenu in menu
    $('.menu2 .catalog_drop>ul>li').mouseleave(function () {
        $('.catalog_drop>ul>li:nth-child(1)').addClass('active');
    })
    $('.menu2 .catalog_drop>ul>li').mouseenter(function () {
        $('.catalog_drop>ul>li:nth-child(1)').removeClass('active');
        console.log('sss')
    })


    //add gray background in menu
    $('.menu2> li').mouseenter(function () {
        if (!($(this).hasClass('no-bg'))) {
            $('.back-bg').addClass('active');

        }

    }).mouseleave(function () {
        $('.back-bg').removeClass('active');

    })
} else {
    //mobile menu

    //remove default active first child in menu
    $('.lvl1').removeClass('active');


    //menu li hover
    $('.menu2>li>a').click(function (e) {
        e.preventDefault()
        $(this).parent().toggleClass('active')
        let isNewMenuOpen = ($(this).parent().hasClass('li-with-drop'));
        if (isNewMenuOpen) {
            $('.menu2').addClass('ov-h');
        }
    })

    //toggle submenu
    $('.lvl1 > a').click(function (e) {
        e.preventDefault();
        $(this).parent().toggleClass('active')
    })
    //toggle submenu lvl 2
    $('.list-title').click(function (e) {
        e.preventDefault()
        $(this).toggleClass('active')
    })

    //close btn in menu
    $('#nav-toggle2').click(function (e) {
        closeMobileMenu();
    })
    //close btn in header
    $('#nav-toggle').click(function (e) {
        if ($(this).hasClass('active')) {
            closeMobileMenu();
        } else {
            hideFixedMenu();
            openMobileMenu();
        }
    })
}
//click on home btn in menu
$('.home-a').click(function (e) {
    closeMobileSubMenu()
})
$('.search2 a').click(function (e) {
    e.preventDefault()
    closeMobileMenu();
    openSearch();
})

function closeMobileSubMenu() {
    $('.menu2').removeClass('ov-h');

    $('.catalog_drop').parent('li').removeClass('active');
}

function closeMobileMenu() {
    //close menu
    $('.menu2').removeClass('ov-h');

    $('#nav-toggle').removeClass('active')
    $('.menu2').removeClass('active')
    $('.menu2 li').removeClass('active')
    $('.content-page').removeClass('active')
    $('.back-bg').removeClass('active2-m')
    $('.menu2 .list-title').removeClass('active')
}

function openMobileMenu() {
    //open menu
    $('.back-bg').addClass('active2-m')
    $('#nav-toggle').addClass('active')
    $('.content-page').addClass('active')
    $('.menu2').addClass('active')
}

$(document).mouseup(function (e) {
    //close menu block when click outside
    let container = $(".menu2");
    let btn = $('#nav-toggle')
    if (!btn.is(e.target) && !container.is(e.target) && container.has(e.target).length === 0 && screen.width < 1280) {
        closeMobileMenu();

    }
    //close calculate-delivery-li .form-del.active when click outside
    let containerCalculate = $(".calculate-delivery-li .form-del");
    if (!containerCalculate.is(e.target) && containerCalculate.has(e.target).length === 0) {
closeCalculateDelivery()
    }
    //close search block when click outside
    let search = $('.search');
    if (!search.is(e.target) && search.has(e.target).length === 0) {
        closeSearch();
    }
    //close submenu block in presentation and catalog page when click outside
    let itemC = $('.presentation-catalog .catalog-left .item');
    if (!itemC.is(e.target) && itemC.has(e.target).length === 0) {
        closeFtitle();
    }

    //close sort modal window catalog page when click outside
    let sortBlock = $('.sort-b');
    if (!sortBlock.is(e.target) && sortBlock.has(e.target).length === 0) {
        closeSortModalWindow();
    }
    //close lang block when click outside
    let langContainer = $('.lang');
    if (!langContainer.is(e.target) && langContainer.has(e.target).length === 0) {
        closeLang();

    }
    //close previous-products  block when click outside
    let previousProducts = $('.previous-products ');
    if (!previousProducts.is(e.target) && previousProducts.has(e.target).length === 0) {
        closepreviousProducts();

    }
    //close phone block when click outside
    let phone = $('.phones');
    if (!phone.is(e.target) && phone.has(e.target).length === 0) {
        closePhones();

    }
    //close filter block when click outside
    let filter = $('.filters');
    if (!filter.is(e.target) && filter.has(e.target).length === 0) {
        closeFilter();
    }

    //close profile block when click outside
    let auth = $('.auth');
    if (!auth.is(e.target) && auth.has(e.target).length === 0) {
        closeProfile();
    }

});
$('.auth-li').click(function (e) {
    e.preventDefault()
    closeMobileMenu();
    openProfile();
})
$('.mobile-top .auth').click(function (e) {
    e.preventDefault()
    closeMobileMenu();
    openProfile();
})
function scrollToblock(block) {
    $('html, body').animate({
        scrollTop: block.offset().top - 60
    }, 1000);
}


let cartpage = document.querySelector('.cart-page');
if (cartpage) {
    let curentBlockIndex = 1;
    let cartScrollBlocks = [
        $('.cart-row .left .cart-bottom-summ'),
        $('.cart-row .right .cart-bottom-summ'),
        $('.order')
    ]
//btn scroll to control blocks
    $('.cart-button-mobile').click(function (e) {
        e.stopImmediatePropagation()
        if ($(this).hasClass('cart1')) {
            if ($(this).parent().position().top > 600) {
                scrollToblock($('.cart-row .left'))
            } else {
                scrollToblock($('.cart-row .left .cart-bottom-summ'))
            }
        }
        if ($(this).hasClass('cart2')) {
            console.log($(this).parent().position().top)
            if ($(this).parent().position().top > 600) {
                scrollToblock($('.cart-row .right'))

            } else {
                scrollToblock($('.cart-row .right .cart-bottom-summ'))

            }
        }

    })
    //btn show all goods
    $('.cart-show-all-goods').click(function (e) {
        e.preventDefault()
        $(this).parents('.mobile-cart').toggleClass('active')
        $(this).parents('.mobile-cart').find('.block-show-toggle').toggleClass('active')
        $(this).parents('.mobile-cart').find('.cart-button-mobile-container').toggleClass('active')
        $('html, body').animate({
            scrollTop: $(this).parents('.mobile-cart').offset().top - 60
        }, 1000);
        if ($(this).text() == "Скрыть товары") {
            $(this).text("Показать все товары")
        } else {
            $(this).text("Скрыть товары")

        }
    })

    //btn show more details in mobile cart item
    $('.show-more').click(function (e) {
        e.preventDefault()
        $(this).parent().toggleClass('active')
    })

    //btn `check all` inputs in cart item
    $('.cart-check-all-input').click(function () {
        let checkBoxes = $(this).parents(".cart-part").find(".cart-item-check");
        checkBoxes.prop("checked", !checkBoxes.prop("checked"));
    })

    //select delivery
    $(".delivery-select").change(function (e) {
        let selectedValue = $(this).children("option:selected").val();
        if (selectedValue == 'novaposhta') {
            showNovaPoshtaDetails();
        } else {
            hideNovaPoshtaDetails();
        }
    });
}

function hideNovaPoshtaDetails() {
    $('.delivery-wrap').addClass('active');
}

function showNovaPoshtaDetails() {
    $('.delivery-wrap').addClass('active');
}

let catalogonepage = document.querySelector('.catalog-one-page');
if (catalogonepage) {
    ratingStar();
    $('#products-slider').slick({
        slidesToShow: 6,
        arrow: true,
        slidesToScroll: 6,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5
                }
            }, {
                breakpoint: 1230,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 730,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    });

    //smooth scroll to comment block
    $(".to-comment").click(function (e) {
        e.preventDefault()
        $('html, body').animate({
            scrollTop: $("#comments-block").offset().top
        }, 2000);
    });
    //slider and zoom
    // var zoomOptions = {
    //     zoomType: "inner"
    // };


    $(".regular").slick({
        asNavFor: ".thumbs",
        arrows: false
    });
    $(".thumbs").slick({
        arrows: true,
        slidesToShow: 6,
        asNavFor: ".regular",
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1450,
                settings: {
                    slidesToShow: 5,
                }
            }, {
                breakpoint: 1180,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 6,
                }
            },
            {
                breakpoint: 660,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 4,
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                }
            }
            , {
                breakpoint: 380,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });

    $(".regular-popup").slick({
        arrows: true
    });
    $('.regular-popup').slickLightbox({
        src: 'href',
        itemSelector: 'a'
    });
    // $(".regular .slick-current img").elevateZoom(zoomOptions);
    // $(".regular").on("beforeChange", function(
    //     event,
    //     slick,
    //     currentSlide,
    //     nextSlide
    // ) {
    //     $.removeData(currentSlide, "elevateZoom");
    //     $(".zoomContainer").remove();
    // });
    // $(".regular").on("afterChange", function() {
    //     $(".regular .slick-current img").elevateZoom(zoomOptions);
    // });


}
let stockPage = document.querySelector('.stock-main-page');
function stockCounter(countDown) {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    let x = setInterval(function () {

            let now = new Date().getTime(),
                distance = countDown - now;

            document.getElementById('days').innerText = Math.floor(distance / (day)),
                document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
                document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
                document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

            //do something later when date is reached
            //if (distance < 0) {
            //  clearInterval(x);
            //  'IT'S MY BIRTHDAY!;
            //}

        }, second)
}
if (stockPage) {
//stock counter
 //stockCounter(new Date('Aug 28, 2020 00:00:00').getTime())

}
let newsPage = document.querySelector('.news-page');
if($('.news-slider-cont').length){
    $('.news-slider-cont').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 830,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
}

//datePicker profile page
if ($('#sort-date').length) {
    $.datepicker.setDefaults( $.datepicker.regional[ "ru" ] );

    $( "#sort-date" ).datepicker({
        onSelect: function(date) {
        }
    });
    $( "#sort-date2" ).datepicker({
            onSelect: function (date) {
            }
        }
    );

}
//open datapicker
$('.order-date').click(function (e) {
 let dataPiscerId  = $(this).find('.hasDatepicker');

 $(dataPiscerId).datepicker( "show" );
})
//brands slider

if($('.brands-slider').length) {
    $('.brands-slider').slick({
        slidesToShow: 5,
        arrow: true,
        responsive: [
            {
                breakpoint: 1560,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ]
    });
}

let mainPage = document.querySelector('.main-page');

if (mainPage) {
    // $('.benefits .item').mouseenter(function () {
    //     $('.benefits').addClass('active');
    // }).mouseleave(function () {
    //     $('.benefits').removeClass('active')
    // })
    $('.previous-products').click(function () {
        $(this).toggleClass('active')
    })
    $('.top-slider-slick').slick({
        dots: true,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    dots: false,
                    arrows: false
                }
            }]
    });
    $('#products-slider').slick({
        slidesToShow: 6,
        arrow: true,
        slidesToScroll: 6,
        responsive: [
            {
                breakpoint: 1340,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5
                }
            }, {
                breakpoint: 1230,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 730,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    });
    $('.benefits-slider').slick({
        slidesToShow: 8,
        arrow: true,
        responsive: [
            {
                breakpoint: 1800,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }

        ]
    });
    $('.news-slider').slick({
        slidesToShow: 4,
        arrow: true,
        infinite: false,
        responsive: [
            {
                breakpoint: 1800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }, {
                breakpoint: 790,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

}

//counter in  product item
$('.minus').click(function (e) {
    counteReduce(e);
});
$('.plus').click(function (e) {
    counterIncrease(e);
});
//counter in  product item. check if input only number
$('.counter input').keyup(function (e) {
    let text = e.target.value;
    let testText = text;
    let step = +e.target.dataset.step || 1;
    let correctNumber;
    if (testText * 1 + 0 != text) {
        correctNumber = testText.substring(0, testText.length - 1)
        if (isNaN(correctNumber)) {
            correctNumber = step;
        }
        e.target.value = correctNumber;

    }

});


//counter in  product item. checl input with correct step
$('.counter input').change(function (e) {
    let step = +e.target.dataset.step || 1;
e.target.value = round(e.target.value, step)
})
function round(number, step)
{
    let num = Math.ceil(number/step)*step;
   if(num == 0){num = step}
   return num;
}
function checkCounterValue(e) {
    console.log(checkNumber(e));
    console.log(e.target.value)
}

function counterIncrease(e) {
    e.preventDefault()
    let input = e.target.parentNode.querySelector('input');
    let step = +input.dataset.step || 1;
    input.value = +input.value + step;
}

function checkNumber(e) {
    if ((e.which >= 48 && e.which <= 57) // цифры
        ||
        (e.which >= 96 && e.which <= 105) // num lock
        ||
        e.which == 8 // backspace
        ||
        (e.which >= 37 && e.which <= 40) // стрелки
        ||
        e.which == 46) // delete
    {
        return true;
    } else {
        return false;
    }
}

function counteReduce(e) {
    e.preventDefault()
    let input = e.target.parentNode.querySelector('input');
    let step = +input.dataset.step || 1;
    let value = +input.value;
    if (value > step) {
        input.value = value - step;
    }
}


//open search block in header
$('.search').click(function (e) {
    e.preventDefault();
    openSearch();
})

function closeSearch() {
    $('.search').removeClass('active')
    $('.back-bg').removeClass('active3')
    $('body').removeClass('active')
}

function openSearch() {
    $('.search').addClass('active')
    $('.back-bg').addClass('active3')
    $('body').addClass('active')

}


//open phone block in header
$('.phones').click(function (e) {
    e.preventDefault();
    openPhones();
})
$('.phones-sticky').click(function (e) {
    e.preventDefault();
    openPhones();
})

function closePhones() {
    $('.phone-right').removeClass('active')
    $('.back-bg').removeClass('active2')

}

function openPhones() {
    $('.phone-right').addClass('active')
    $('.back-bg').addClass('active2')
}


//open lang block in header
$('.lang').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('active')
})


//catalog page
//filter. open submenu inside
$('.f-title').click(function () {
    closeFtitle()
    $(this).parent().children('.content').slideToggle();
    $(this).parent().toggleClass('active')
})
//certificate page show all text
$('.certificate-catalog .item .item-title .text').click(function () {
    $(this).toggleClass('active')
})
function closeFtitle() {
    $('.presentation-catalog .catalog-left .item').removeClass('active')
    $('.presentation-catalog .catalog-left .item .content').slideUp();
}
//sort
$('.sort-btn').click(function () {
    $(this).parent().children('ul').toggleClass('active')
})


//goods filter
$('.mobile-icon').click(function () {
    if ($('.filters').hasClass('active')) {
        closeFilter()
    } else {
        openFilter();
    }
})

function closeFilter() {
    $('.filters').removeClass('active')
    $('body').removeClass('active-filter')
    $('.back-bg').removeClass('active-filter')

}

function openFilter() {
    $('.filters').addClass('active')
    $('body').addClass('active-filter')
    $('.back-bg').addClass('active-filter')

}

function closeSortModalWindow() {
    $('.sort-b ul').removeClass('active')

}

//header. profile modal window
$('.close-popup-modal').click(function () {
    closeProfile()
})
$('.auth').click(function (e) {
    if($(e.target).hasClass('t2') || $(e.target).hasClass('t1') || $(e.target).hasClass('auth-img')) {
        if ($(this).hasClass('active')) {
            closeProfile()
        } else {
            openProfile();
        }
    }
})

function closeProfile() {
    $('.auth').removeClass('active')
    $('.back-bg').removeClass("profile-active")
    $('body').removeClass("popup")
}

function closeLang() {
    $('.lang').removeClass('active')

}

function closepreviousProducts() {
    $('.previous-products').removeClass('active')

}

function openProfile() {
    $('.auth').addClass('active')
    if(screen.width <576 ){
        $('body').addClass("popup")
        $('.back-bg').addClass("profile-active")
    }

}

//register page show password
$(".toggle-password").click(function () {
    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    console.log(input)
    if (input.attr("type") == "password") {
        input.attr("type", "text");
    } else {
        input.attr("type", "password");
    }
});


//faq page. open/close question
$('.accordion > li:eq(0) a').addClass('active').next().slideDown();

$('.accordion a').click(function (j) {
    var dropDown = $(this).closest('li').find('.dr');

    $(this).closest('.accordion').find('.dr').not(dropDown).slideUp();

    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
    } else {
        $(this).closest('.accordion').find('a.active').removeClass('active');
        $(this).addClass('active');
    }

    dropDown.stop(false, true).slideToggle();

    j.preventDefault();
});


//catalog show more btn
$('.show-more').click(function (e) {
    e.preventDefault()
    if ($(this).parent().children('.text').hasClass('active')) {
        $(this).children('span').text('Развернуть')
    } else {
        $(this).children('span').text('Свернуть')
    }
    $(this).parent().children('.text').toggleClass('active')
    console.log($(this).parent())
})

//fix menu
var scrollableElement = document.body; //document.getElementById('scrollableElement');
scrollableElement.addEventListener('wheel', checkScrollDirection);
var menuTimeOut;

function checkScrollDirection(event) {
    console.log('asas')
    let isActiveMenu =
        document.querySelector('.back-bg').classList.contains("active")
        || document.querySelector('.back-bg').classList.contains("active2")
        || document.querySelector('.back-bg').classList.contains("active2-m")
        || document.querySelector('.back-bg').classList.contains("active3")

    if (checkScrollDirectionIsUp(event) && event.pageY > 900) {
        clearTimeout(menuTimeOut);
        //up
        document.querySelector(".header").classList.add("sticky");
        menuTimeOut = setTimeout(function () {
            document.querySelector(".header").classList.add("active");

        }, 100)
    }
    else {
        if (event.pageY < 900 && !isActiveMenu) {
            document.querySelector(".header").classList.remove("sticky");
            document.querySelector(".header").classList.remove("active");
        } else {
            if (!isActiveMenu) {
                //down
                clearTimeout(menuTimeOut);
                menuTimeOut = setTimeout(function () {
                    document.querySelector(".header").classList.remove("sticky");

                }, 400)
                document.querySelector(".header").classList.remove("active");
            }
        }
    }
}

function hideFixedMenu() {
    console.log('hide')
    document.querySelector(".header").classList.remove("sticky");
    document.querySelector(".header").classList.remove("active");
}

function checkScrollDirectionIsUp(event) {
    if (event.wheelDelta) {
        return event.wheelDelta > 0;
    }
    return event.deltaY < 0;
}

$('.filters-real-estate li').click(function () {
    $(this).toggleClass('active')
})


//table or rows view of catalog
//class col - set a row; class row - set a col ))
$('.sort').click(function (e) {
    e.preventDefault()
    if ($(e.target).hasClass('make-row')) {
        $('.make-col').removeClass('active')
        $('.make-row').addClass('active')
        $('.new-products .products').addClass('products-row');
        $('.new-products .products').removeClass('products-list');
        $('.new-products .products').removeClass('products');
        cropText(180, document.querySelectorAll('.item-description'))

    } else {
        if ($(e.target).hasClass('make-col')) {
            $('.make-col').addClass('active')
            $('.make-row').removeClass('active')
            $('.catalog-products').removeClass('row')
            $('.new-products .products-row').addClass('products-list');
            $('.new-products .products-row').addClass('products');
            $('.new-products .products-row').removeClass('products-row')

        }
    }
})

//register page
$('.register-form-top a').click(function (e) {
    e.preventDefault()
    let isOpt = $(this).hasClass('f-opt')
    $(this).parent().find('a.active').removeClass('active')
    $(this).addClass('active')
    if (isOpt) {
        $('.opt-elements').addClass('active')
    } else {
        $('.opt-elements').removeClass('active')

    }
})

//delivery page
//calculate delivery form
$('.calculate-delivery-btn').click(function (e) {
    e.preventDefault();
    $(e.target).parent().find('.form-del').toggleClass('active')

})
function closeCalculateDelivery(){
$('.calculate-delivery-li .form-del.active').removeClass('active')
}
//header. search. mobile. togle category and products
$('.nav-row-search a').click(function (e) {
    e.preventDefault();
    if ($(e.target).hasClass('category')) {
        $(this).addClass('active')
        $('.nav-row-search .products-aa').removeClass('active')
        $('.header .search .search-result .right').removeClass('active')
        $('.header .search .search-result .left').addClass('active')
    } else {
        $('.header .search .search-result .right').addClass('active')
        $('.header .search .search-result .left').removeClass('active')
        $(this).addClass('active')
        $('.nav-row-search .category').removeClass('active')
    }
})

function cropText(size, cropElement) {
    let endCharacter = '...';

    cropElement.forEach(el => {
        let text = el.innerHTML;

        if (el.innerHTML.length > size) {
            text = text.substr(0, size);
            el.innerHTML = text + endCharacter;
        }
    });
}

$('.good-item #gallery').click(function () {
    openPopup();
})
$('.close-popup').click(function (e) {
    e.preventDefault()
    closePopup();
})

function openPopup() {
    $('.popup-gallery').addClass('active')
    $('.back-bg').addClass('popup')
    $('body').addClass('popup')
}

function closePopup() {
    $('.popup-gallery').removeClass('active')
    $('.back-bg').removeClass('popup')
    $('body').removeClass('popup')
}


function catalogRange() {

    var parent = document.querySelector(".price-slider");
    if (!parent) return;

    var
        rangeS = parent.querySelectorAll("input[type=range]"),
        numberS = parent.querySelectorAll("input[type=number]");

    rangeS.forEach(function (el) {
        el.oninput = function () {
            var slide1 = parseFloat(rangeS[0].value),
                slide2 = parseFloat(rangeS[1].value);

            if (slide1 > slide2) {
                [slide1, slide2] = [slide2, slide1];
            }

            numberS[0].value = slide1;
            numberS[1].value = slide2;
        }
    });

    numberS.forEach(function (el) {
        el.oninput = function () {
            var number1 = parseFloat(numberS[0].value),
                number2 = parseFloat(numberS[1].value);

            if (number1 > number2) {
                var tmp = number1;
                numberS[0].value = number2;
                numberS[1].value = tmp;
            }

            rangeS[0].value = number1;
            rangeS[1].value = number2;

        }
    });

    var parent2 = document.querySelector(".price-slider2");
    if (!parent2) return;

    var
        rangeS2 = parent2.querySelectorAll("input[type=range]"),
        numberS2 = parent2.querySelectorAll("input[type=number]");

    rangeS2.forEach(function (el) {
        el.oninput = function () {
            var slide12 = parseFloat(rangeS2[0].value),
                slide22 = parseFloat(rangeS2[1].value);

            if (slide12 > slide22) {
                [slide12, slide22] = [slide22, slide12];
            }

            numberS2[0].value = slide12;
            numberS2[1].value = slide22;
        }
    });

    numberS2.forEach(function (el) {
        el.oninput = function () {
            var number12 = parseFloat(numberS2[0].value),
                number22 = parseFloat(numberS2[1].value);

            if (number12 > number22) {
                var tmp2 = number12;
                numberS2[0].value = number22;
                numberS2[1].value = tmp2;
            }

            rangeS2[0].value = number12;
            rangeS2[1].value = number22;

        }
    });

}
catalogRange();


function ratingStar(){
    if(!($('.rating input').length)){
        return;
    }
    // Check Radio-box
    $(".rating input:radio").attr("checked", false);

    $('.rating input').click(function () {
        $(".rating span").removeClass('checked');
        $(this).parent().addClass('checked');
    });

    $('input:radio').change(
        function(){
            var userRating = this.value;
            console.log(this);
        });
}
function getRating() {
    return $('span.checked input')[0].value;
}