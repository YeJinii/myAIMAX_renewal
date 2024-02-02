$(document).ready(function(){

    const $val_name = $(".tag_name");

    const exposurePercentage = 100;
    const loop = true;

    $(window).on('scroll', function() {

        $val_name.each(function() {

            const $el = $(this);
            
            const rect = $el[0].getBoundingClientRect();
            const winHeight = window.innerHeight;
            const contentHeight = rect.bottom - rect.top;
                    
            if (rect.top <= winHeight - (contentHeight * exposurePercentage / 100) && rect.bottom >= (contentHeight * exposurePercentage / 100)) {
                $('tag_name').addClass('on');
            }
            if (loop && (rect.bottom <= 0 || rect.top >= window.innerHeight)) {
                $('tag_nam,e').removeClass('on');
            }

        });

    }).scroll();

});

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}