/**
 * Created by leavie on 2016/11/23.
 */
var modalWrapper = $('.modal-wrapper');
$('.modal-action .button').on('click',function(){
    modalWrapper.addClass('show');
});
$('.dialogue-action .button').on('click',function(){
    modalWrapper.removeClass('show');
});
test = 8;
talkWithOtherFiles(modalWrapper);