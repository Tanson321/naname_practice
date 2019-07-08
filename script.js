$('#corner').click(function(){
    $('#one').css('animation-delay','100ms');
    $('#two').css('animation-delay','200ms');
    $('#three').css('animation-delay','300ms');
    $('#corner').css('animation-delay','500ms');
    $('#main').css('animation-name','rollUp');
    $('#one').css('animation-name','rollUp');
    $('#two').css('animation-name','rollUp');
    $('#three').css('animation-name','rollUp');
    $('#corner').css('animation-name','rollUpCorner');
});

$("#corner").click(function(){
    setTimeout(function(){
        $('#corner').css('animation-duration','0.4s');
        $('#corner').css('animation-delay','0s');
        $('#corner').css('animation-name','rollDown');
        $('#corner').css('pointer-events','none');
        $('.back').css('pointer-events','auto');
    },900);
});

$('#corner').click(function(){
    setTimeout(function(){
        $('.back').show();
    },1200);
});

$('.back').click(function(){
    $('#main').css('clip-path', 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)');
    $('#one').css('clip-path', 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)');
    $('#two').css('clip-path', 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)');
    $('#three').css('clip-path', 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)');
    $('#corner').css('animation-delay','0ms');
    $('#main').css('animation-delay','80ms');
    $('#one').css('animation-delay','160ms');
    $('#two').css('animation-delay','240ms');
    $('#three').css('animation-delay','320ms');
    $('#corner').css('animation-name','clickedBack');
    $('#main').css('animation-name','clickedBack');
    $('#one').css('animation-name','clickedBack');
    $('#two').css('animation-name','clickedBack');
    $('#three').css('animation-name','clickedBack');
    $('.back').hide();
    $('h1').hide();
    $('p').hide();
});

$('.back').click(function(){
    setTimeout(function(){
        $('h1').show();
        $('p').show();
        $('#main').css('animation-delay', '0s');
        $('#main').css('animation-name','rollbackMain');
        $("#one").css('clip-path','polygon(0% -95%, 100% -95%, 100% -35%, 0% 0%)')
        $('#one').css('animation-delay','80ms');
        $('#one').css('animation-name','rollbackOne');
        
        $("#two").css('clip-path','polygon(0% -100%, 100% -100%, 100% -35%, 0% 0%)')
        $('#two').css('animation-delay','160ms');
        $('#two').css('animation-name','rollbackTwo');

        $("#three").css('clip-path','polygon(0% -105%, 100% -105%, 100% -35%, 0% 0%)')
        $('#three').css('animation-delay','240ms');
        $('#three').css('animation-name','rollbackThree');

        $('#corner').css('clip-path','polygon(0% -15%, 38% -15%, 0% 0%)');
        $('#corner').css('animation-duration','500ms');
        $('#corner').css('animation-delay','500ms');
        $('#corner').css('animation-name','rollbackCorner');

    },750);
});

$('.back').click(function(){
    setTimeout(function(){
        $("body *").removeAttr('style');
    }, 1700);
});