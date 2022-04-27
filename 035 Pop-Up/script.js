/**
 * dependency: Jquery
 */
var model = $('.b-modal')
$('.js-modal-action .button').on('click', function () {
    model.addClass('b-modal_show')
})
$('.b-dialogue-action .button').on('click', function () {
    model.removeClass('b-modal_show')
})
$('.b-modal__mask').on('click', function () {
    model.removeClass('b-modal_show')
})