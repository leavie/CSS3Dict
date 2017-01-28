/**
 * dependency: Jquery
 */
var modalWrapper = $('.modal-wrapper');
$('.modal-action .button').on('click',function(){
    modalWrapper.addClass('show');
});
$('.dialogue-action .button').on('click',function(){
    modalWrapper.removeClass('show');
});