$(document).ready(function(){
    $('#mobilebtn').on('click', function(){
        $('#mobilemenu').toggLeClass('active');
        $('#mobilebtn').find('i').toggLeClass('fa-x');
    });
    const sections=$('section');
    const navItens=$('navitem');

    $(window).on('scroll', function(){
        const header=$('header');
        const scrollposition=$(window).scrollTop()-header.outerHeight();
        
        let activeSectionIndex=0;

        if (scrollposition<=0){
            header.css('box-shadow', 'none');
        }else{
            header.css('box-shadow','5px 1px 5 px rgba (0,0,0,0.1');
        }
        sections.each(function(i){
            const section=$(this);
            const sectionTop=section.offset().top - 96;
            const sectionBotton= sectionTop+ section.outerHeight();

            if (scrollposition >=sectionTop && scrollposition<sectionBotton){
                activeSectionIndex=i;
                return false;
            }
        })
        navItens.removeClass('active');
        $(navItens[activeSectionIndex]).addClass('active');

    });
});