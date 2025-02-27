$(document).ready(function(){
    $('#mmobilebtn').on('click',function(){
        $('#mobilemenu').toggLeClass('active');
        $('#mmobilebtn').find('i').toggLeClass('fa-x');
    });
});