$(function() {

    $(".service-nav").hover(
        function(){
            $(".service-nav").addClass("IHS-Color-G5");
            $('.mega-menu').show();
        },
        function(){
            $(".service-nav").removeClass("IHS-Color-G5");
            $('.mega-menu').hide();
        }
    );
    $(".mega-menu").hover(
        function(){
            $(".service-nav").addClass("IHS-Color-G5");
            $('.mega-menu').show();
        },
        function(){
            $(".service-nav").removeClass("IHS-Color-G5");
            $('.mega-menu').hide();
        }
    );
});