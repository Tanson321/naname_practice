$(document).on("click touchstart", "#corner", (function(){
    $('#one').css('animation-delay','100ms');
    $('#two').css('animation-delay','200ms');
    $('#three').css('animation-delay','300ms');
    $('#corner').css('animation-delay','500ms');
    $('#d1').hide();
    $('#main').css('animation-name','rollUp');
    $('#one').css('animation-name','rollUp');
    $('#two').css('animation-name','rollUp');
    $('#three').css('animation-name','rollUp');
    $('#corner').css('animation-name','rollUpCorner');
    $('.text').hide();
}));

$(document).on("click touchstart", "#corner", (function(){
    setTimeout(function(){
        $('#corner').css('animation-duration','0.4s');
        $('#corner').css('animation-delay','0s');
        $('#corner').css('animation-name','rollDown');
        $('body *').css('pointer-events','none');
        $('.back').css('pointer-events','auto');
        $('.img').css('visibility','hidden');
        $('.text').show();
    },900);
}));

$(document).on("click touchstart", "#corner", (function(){
    setTimeout(function(){
        $('.back').show();
    },1200);
}));

$(document).on("click touchstart", "#main", (function(){
    $('#one').css('animation-delay','100ms');
    $('#two').css('animation-delay','200ms');
    $('#three').css('animation-delay','300ms');
    $('#corner').css('animation-delay','500ms');
    $('#d1').hide();
    $('.text').hide();
    $('#main').css('animation-name','rollUp');
    $('#one').css('animation-name','rollUp');
    $('#two').css('animation-name','rollUp');
    $('#three').css('animation-name','rollUp');
    $('#corner').css('animation-name','rollUpCorner');
}));

$(document).on("click touchstart", "#main", (function(){
    setTimeout(function(){
        $('#main').css('animation-duration','0.4s');
        $('#main').css('animation-delay','0s');
        $('#main').css('animation-name','rollDown');
        $('body *').css('pointer-events','none');
        $('.back').css('pointer-events','auto');
        $('.text').show();
    },900);
}));

$(document).on("click touchstart", "#main", (function(){
    setTimeout(function(){
        $('.back').show();
    },1200);
}));

$(document).on("click touchstart", "#one", (function(){
    $('#one').css('animation-delay','100ms');
    $('#two').css('animation-delay','200ms');
    $('#three').css('animation-delay','300ms');
    $('#corner').css('animation-delay','500ms');
    $('#d1').hide();
    $('.text').hide();
    $('#main').css('animation-name','rollUp');
    $('#one').css('animation-name','rollUp');
    $('#two').css('animation-name','rollUp');
    $('#three').css('animation-name','rollUp');
    $('#corner').css('animation-name','rollUpCorner');
}));

$(document).on("click touchstart", "#one", (function(){
    setTimeout(function(){
        $('#one').css('animation-duration','0.4s');
        $('#one').css('animation-delay','0s');
        $('#one').css('animation-name','rollDown');
        $('#body').css('pointer-events','none');
        $('.back').css('pointer-events','auto');
        $('.text').show();
    },900);
}));

$(document).on("click touchstart", "#one", (function(){
    setTimeout(function(){
        $('.back').show();
    },1200);
}));

$(document).on("click touchstart", "#two", (function(){
    $('#one').css('animation-delay','100ms');
    $('#two').css('animation-delay','200ms');
    $('#three').css('animation-delay','300ms');
    $('#corner').css('animation-delay','500ms');
    $('#d1').hide();
    $('.text').hide();
    $('#main').css('animation-name','rollUp');
    $('#one').css('animation-name','rollUp');
    $('#two').css('animation-name','rollUp');
    $('#three').css('animation-name','rollUp');
    $('#corner').css('animation-name','rollUpCorner');
}));

$(document).on("click touchstart", "#two", (function(){
    setTimeout(function(){
        $('#two').css('animation-duration','0.4s');
        $('#two').css('animation-delay','0s');
        $('#two').css('animation-name','rollDown');
        $('#body').css('pointer-events','none');
        $('.back').css('pointer-events','auto');
        $('.text').show();
    },900);
}));

$(document).on("click touchstart", "#two", (function(){
    setTimeout(function(){
        $('.back').show();
    },1200);
}));

$(document).on("click touchstart", "#three",(function(){
    $('#one').css('animation-delay','100ms');
    $('#two').css('animation-delay','200ms');
    $('#three').css('animation-delay','300ms');
    $('#corner').css('animation-delay','500ms');
    $('#d1').hide();
    $('.text').hide();
    $('#main').css('animation-name','rollUp');
    $('#one').css('animation-name','rollUp');
    $('#two').css('animation-name','rollUp');
    $('#three').css('animation-name','rollUp');
    $('#corner').css('animation-name','rollUpCorner');
}));

$(document).on("click touchstart", "#three",(function(){
    setTimeout(function(){
        $('#three').css('animation-duration','0.4s');
        $('#three').css('animation-delay','0s');
        $('#three').css('animation-name','rollDown');
        $('#body').css('pointer-events','none');
        $('.back').css('pointer-events','auto');
        $('.text').show();
    },900);
}));

$(document).on("click touchstart", "#three",(function(){
    setTimeout(function(){
        $('.back').show();
    },1300);
}));

$(document).on("click touchstart", "#space",(function(){
    $('#one').css('animation-delay','100ms');
    $('#two').css('animation-delay','200ms');
    $('#three').css('animation-delay','300ms');
    $('#corner').css('animation-delay','500ms');
    $('#main').css('animation-name','rollUp');
    $('#one').css('animation-name','rollUp');
    $('#two').css('animation-name','rollUp');
    $('#three').css('animation-name','rollUp');
    $('#corner').css('animation-name','rollUpCorner');
}));

$(document).on("click touchstart", "#space",(function(){
    setTimeout(function(){
        $('#space').css('transition-duration','500ms');
        $('#space').css('background-color','black');
        $('#body').css('pointer-events','none');
        $('.back').css('pointer-events','auto');
    },900);
}));

$(document).on("click touchstart", "#space", (function(){
    setTimeout(function(){
        $('.back').show();
    },3000);
}));

$(document).on("click touchstart", "#back",(function(){
    $('#main').css('clip-path', 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)');
    $('#one').css('clip-path', 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)');
    $('#two').css('clip-path', 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)');
    $('#three').css('clip-path', 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)');
    $('#corner').css('clip-path', 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)');
    $('#corner').css('-webkit-clip-path', 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)');
    $('#main').css('-webkit-clip-path', 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)');
    $('#one').css('-webkit-clip-path', 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)');
    $('#two').css('-webkit-clip-path', 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)');
    $('#three').css('-webkit-clip-path', 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)');
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
    $('#d1').hide();
    $('h1').hide();
    $('p').hide();
    $('.img').hide();
    $('.center').hide();
    $('.twitter').hide();
    $('.github').hide();
    $('h2').hide();
    $('.text').hide();
}));

$(document).on("click touchstart", "#back",(function(){
    setTimeout(function(){
        $('h1').show();
        $('p').show();
        $('body *').css('pointer-events','none');
        $('#main').css('animation-delay', '0s');
        $('#main').css('animation-name','rollbackMain');
        $("#one").css('clip-path','polygon(0% -95%, 100% -95%, 100% -35%, 0% 0%)')
        $("#one").css('-webkit-clip-path','polygon(0% -95%, 100% -95%, 100% -35%, 0% 0%)')
        $('#one').css('animation-delay','80ms');
        $('#one').css('animation-name','rollbackOne');
        $("#two").css('clip-path','polygon(0% -100%, 100% -100%, 100% -35%, 0% 0%)')
        $("#two").css('-webkit-clip-path','polygon(0% -100%, 100% -100%, 100% -35%, 0% 0%)')
        $('#two').css('animation-delay','160ms');
        $('#two').css('animation-name','rollbackTwo');
        $("#three").css('clip-path','polygon(0% -105%, 100% -105%, 100% -35%, 0% 0%)')
        $("#three").css('-webkit-clip-path','polygon(0% -105%, 100% -105%, 100% -35%, 0% 0%)')
        $('#three').css('animation-delay','240ms');
        $('#three').css('animation-name','rollbackThree');
        $('#corner').css('clip-path','polygon(0% -15%, 38% -15%, 0% 0%)');
        $('#corner').css('-webkit-clip-path','polygon(0% -15%, 38% -15%, 0% 0%)');
        $('#corner').css('animation-name','rollbackCorner');
        $('#corner').css('animation-duration','400ms');
        $('#corner').css('animation-delay','500ms');
        $('#space').css('transition-duration','500ms');
        $('#space').css('background-color','#333');

    },750);
}));

$(document).on("click touchstart", "#back",(function(){
    setTimeout(function(){
        $("body *").removeAttr('style');
        $('body *').css('pointer-events','auto');
    }, 1700);
}));