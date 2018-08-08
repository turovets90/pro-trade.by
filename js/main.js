$(document).ready(function(){


    $('.mobile_menu_btn').click(function () {
        $('header .main_menu').toggleClass('open');
        $('body').toggleClass('page-noscroll');

        $('.main_menu .close_menu').click(function () {
            $('header .main_menu').removeClass('open');
            $('body').removeClass('page-noscroll');
        });
        return false;
    });
    $(document).on('click', function(e) {
        if (!$(e.target).closest("header .main_menu.open").length) {
            $("header .main_menu.open").removeClass('open');
            $("body").removeClass('page-noscroll');
        }
        e.stopPropagation();
    });


    $('.main_menu .arrow').click(function(){
        $(this).parent().toggleClass('show');
        $(this).next().slideToggle();
    });


    $('.search_mobile_btn').on('click', function(){
        $('.search_form_block_fixed').addClass('show');
    });
    $('.search_close').on('click',function () {
        $('.search_form_block_fixed').removeClass('show');
    });

    $('.main_slider').slick({
        dots: true,
        arrows:false,
        vertical: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        verticalSwiping: true,
    });


    $('.slider_btn_group .slider_prev').click(function(){
        $('.main_slider').slick('slickPrev');
    });

    $('.slider_btn_group .slider_next').click(function(){
        $('.main_slider').slick('slickNext');
    });




    if($('.portfolio_slider > div').length > 3){
        $('.portfolio_slider').slick({
            dots: false,
            arrows: true,
            slidesToShow:5,
            slidesToScroll: 1,
            responsive: [

                {
                    breakpoint: 1300,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    }else if($(window).innerWidth() < 768 && $('.portfolio_slider > div').length > 1){
        $('.portfolio_slider').slick({
            dots: false,
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
        });
    }




    if($('.clients_slider > div').length > 3){
        $('.clients_slider').slick({
            dots: false,
            arrows: true,
            slidesToShow:4,
            slidesToScroll: 1,
            responsive: [

                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    }else if($(window).innerWidth() < 575 && $('.clients_slider > div').length > 1){
        $('.clients_slider').slick({
            dots: false,
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
        });
    }


    var header_height = $('header').height();
    $('header').next().css({'margin-top': header_height+'px'});
    $(window).scroll(function(){
        if ($(this).scrollTop() > header_height) {
            $('header').addClass('fixed');
        } else {
            $('header').removeClass('fixed');
        }
    });


    $('article.type_review').each(function(){
        var more = $(this).find('.review_more');
        var show_more = $(this).find('.show_more span');
        $(show_more).on('click', function () {
            if($(more).is(':visible')){
                $(more).slideUp();
                $(show_more).text('Читать далее');
            }else {
                $(more).slideDown();
                $(show_more).text('Свернуть');
            }
        });
    });


    $('.h_catalog_btn').on('click', function () {
        $(this).next().slideToggle();
    });

    $('.c_nav .arrow').click(function(){
        if($(this).next().is(':visible')){
            $(this).next().slideUp();
        }else{
            $(this).next().slideDown();
        }
    });



    $('.product_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.product_slider_nav'
    });

    $('.product_slider_nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.product_slider',
        dots: false,
        arrows: true,
        focusOnSelect: true,
        responsive: [

            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            }
        ]
    });



    $('.tab-pane').each(function(){
        var more = $(this).find('.more');
        var show_more = $(this).find('.show_more span');
        $(show_more).on('click', function(){
            if($(more).is(':visible')){
                $(more).slideUp();
                $(show_more).text('Показать все');
            }else{
                $(more).slideDown();
                $(show_more).text('Свернуть');
            }
        });
    });




    $('.js-example-basic-single').select2();



    $('.product_slider_2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.product_slider_nav_2'
    });

    $('.product_slider_nav_2').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.product_slider_2',
        dots: false,
        arrows: true,
        focusOnSelect: true,
        responsive: [

            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });




});


