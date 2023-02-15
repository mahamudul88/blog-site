$(document).ready(function(){

    $('.menu').clone().appendTo('.mobile-menu');

    $('.menu-trigger').click(function(){
        $('.mobile-menu').slideToggle()
    });
});