//  google maps api initialization
var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        scrollwheel: false,
        zoom: 8
    });
}

function closeMailmeMessage(){
    $('.mailus-message').css('display', 'none');
}
function openMailmeMessage(){
    $('.mailus-message').css('display', 'block');
}

$(function(){
    $('#mailus-form').submit(function(event){
        event.preventDefault();
        closeMailmeMessage();

        if($('#mailus-form input[type=email]').val(),
           $('#mailus-form input[type=text]').val(),
           $('#mailus-form textarea').val()){

            $.ajax({
                method: "POST",
                url: "action/mailus.php",
                data: {
                    mittente : $('#mailme-form input[type="email"]').val(),
                    oggetto : $('#mailme-form input[type="text"]').val(),
                    messaggio : $('#mailme-form textarea').val(),
                    is_ajax: 1
                }
            }).done(
                function( response ) {
                    $('.mailme-message').html(response);
                    console.log(response);
                    openMailmeMessage();
                }
            ).error(
                function(err){
                    console.error(err);
                    $('.mailme-message').html('Error sending mail requesto to the server!');
                    openMailmeMessage();
                }
            );
        }else{
            $('.mailus-message').html('You must fill in all fields!');
            openMailmeMessage();
        }
    });

//    $('a[href*=#]:not([href=#])').click(function() {
//        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//            var target = $(this.hash);
//            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//            if (target.length) {
//                $('html,body').animate({
//                    scrollTop: target.offset().top
//                }, 1000);
//                return false;
//            }
//        }
//    });
});
