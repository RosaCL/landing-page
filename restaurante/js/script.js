$(document).ready(function(){
    $('mobilebtn').on('click',function(){
        $('mobilemenu').toggLeClass('active');
        $('mobilebtn').find('i').toggLeClass('fa-x');
    });
});