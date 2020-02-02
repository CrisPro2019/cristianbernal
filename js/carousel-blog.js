// CODIO DE JQUERY OWL CAROUSEL PARA EL BLOG
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        autoplay: true,
        autoplayHoverPause: true, 
        loop:true,
        margin:5,
        nav: true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            768:{
                items:1,
                nav: true     
            },
            992:{
                items:2,
                nav:true
            },
            1200:{
                items: 3,
                nav: true
            }
            
        }
    })
});