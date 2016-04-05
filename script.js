var imgs = ['acaso.jpg','acasu.jpg','kri.jpg','niscosi.jpg','nao-challene.jpg'];
var current_img = 0;

function closeMailmeMessage(){
    $('.mailus-message').css('display', 'none');
}
function openMailmeMessage(){
    $('#mailus-message').css('display', 'block');
}
function countdown(){
    var t = Date.parse(new Date('10/5/2016')) - Date.parse(new Date());
    var seconds = Math.floor( (t/1000) % 60 );
    var minutes = Math.floor( (t/1000/60) % 60 );
    var hours = Math.floor( t/(1000*60*60) );
    $('#countdown-hour').html(hours);
    $('#countdown-minute').html(minutes);
    $('#countdown-second').html(seconds);
}

$(function(){
    setInterval(countdown,500);
    $('.carousel').css('background-image','url(asset/img/' + imgs[0] + ')');

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

    $('#photo-prev').on('click', function(){
        if(current_img > 0) current_img--;
        else current_img = imgs.length - 1;

        $('.carousel').css('background-image','url(asset/img/' + imgs[current_img] + ')');
    });

    $('#photo-next').on('click', function(){
        if(current_img < imgs.length - 1) current_img++;
        else current_img = 0;

        $('.carousel').css('background-image','url(asset/img/' + imgs[current_img] + ')');
    });

    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 70
                }, 1000);
                return false;
            }
        }
    });
});
