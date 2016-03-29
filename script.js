function closeMailmeMessage(){
    $('.mailus-message').css('display', 'none');
}
function openMailmeMessage(){
    $('#mailus-message').css('display', 'block');
}

$(function(){
    $('#mailus-form').submit(function(event){
        event.preventDefault();
        closeMailmeMessage();
        $('#mailus-loading').css('display', 'block');

        if($('#mailus-form input[type=email]').val(),
           $('#mailus-form input[type=text]').val(),
           $('#mailus-form textarea').val()){

            $.ajax({
                method: "POST",
                url: "action/mailus.php",
                data: {
                    email : $('#mailus-email').val(),
                    name : $('#mailus-name').val(),
                    object : $('#mailus-object').val(),
                    body : $('#mailus-body').val(),
                    is_ajax: 1
                }
            }).done(
                function( response ) {
                    $('#mailus-message').html(response);
                    console.log(response);
                    openMailmeMessage();
                    $('#mailus-loading').css('display', 'none');
                }
            ).error(
                function(err){
                    console.error(err);
                    $('#mailus-message').html('Error sending mail requesto to the server!');
                    openMailmeMessage();
                    $('#mailus-loading').css('display', 'none');
                }
            );
        }else{
            $('#mailus-message').html('You must fill in all fields!');
            openMailmeMessage();
            $('#mailus-loading').css('display', 'none');
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
