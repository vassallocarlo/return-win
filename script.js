var imgs = [
    'lab1.jpg',
    'lab2.jpg',
    'lab3.jpg',
    'lab4.jpg',
    'lab5.jpg',
    'lab6.jpg',
    'lab7.jpg',
    'lab8.jpg',
    'lab9.jpg',
    'lab10.jpg',
    'lab11.jpg',
    'lab12.jpg',
    'lab13.jpg',
    'lab14.jpg',
    'lab15.jpg',
    'lab16.jpg',
    'lab17.jpg',
    'lab18.jpg',
    'lab19.jpg',
    'lab20.jpg',
    'lab21.jpg',
    'lab22.jpg'
];
var current_img = 0;

function closeMailmeMessage(){
    $('#mailus-message').css('display', 'none');
}
function openMailmeMessage(){
    $('#mailus-message').css('display', 'block');
}


$(function(){
    var timer = setInterval(function countdown(){
        var t = Date.parse(new Date('2016/05/10 15:00:00')) - Date.parse(new Date());

        if(t > 0){        
            var seconds = Math.floor( (t/1000) % 60 );
            var minutes = Math.floor( (t/1000/60) % 60 );
            var hours = Math.floor( t/1000/60/60 );
            $('#countdown-hour').html(hours);
            $('#countdown-minute').html(minutes);
            $('#countdown-second').html(seconds);
        }else{
            clearInterval(timer);
            $('#countdown-hour').html('There');
            $('#countdown-minute').html('we');
            $('#countdown-second').html('are!');
        }
    },500);
    
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
