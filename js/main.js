$(document).ready(function () {

    var namespace = namespace || {};
    namespace.contentAll = '';

    function setDummy() {
        namespace.contentAll = $('.content-all').detach();
        $('#dummy').css('display', 'block');
    }
    ;
    function unsetDummy() {
        $(namespace.contentAll).insertBefore('#dummy');
        $('#dummy').css('display', 'none');
    }
    ;


//----------CounterScript--------------
    var BFCounter = (function () {

        //var target_date = new Date('Jan, 31, 2017').getTime();
        var target_date = new Date().getTime();
        target_date = target_date + 35000;
        var days, hours, minutes, seconds;

        var counterBF = setInterval(function () {

            var current_date = new Date().getTime();
            var seconds_left = (target_date - current_date) / 1000;
            days = parseInt(seconds_left / 86400);
            seconds_left = seconds_left % 86400;
            hours = parseInt(seconds_left / 3600);
            seconds_left = seconds_left % 3600;
            minutes = parseInt(seconds_left / 60);
            seconds = parseInt(seconds_left % 60);

            if (seconds < 1) {
                clearInterval(counterBF);
                setDummy();
            }

            var values = [days, hours, minutes, seconds];
            var tens = [];
            var units = [];

            for (var i = 0, max = 4; i < max; i++) {
                temp = parseInt(values[i] / 10);
                tens.push(temp);
                temp = values[i] % 10;
                units.push(temp);
            }
            for (var i = 0, max = 4; i < max; i++) {
                $('.tens').eq(i).html(tens[i]);
                $('.units').eq(i).html(units[i]);
            }



        }, 1000);

    })();

    $('.top-logo').on('click', unsetDummy);
    
        $('#sandwich').on('click', function(){
            $('#left-top-menu').css('display','block');
        });
        $('#close-menu').on('click', function(){
            $('#left-top-menu').css('display','none');
        });
        
        

    $('.anchor-middle a').eq(0).on('click', function () {
        $.scrollTo($('.heading').eq(0), 800);
    });
    $('.anchor-middle a').eq(1).on('click', function () {
        $.scrollTo($('.heading').eq(1), 800);
    });
});

