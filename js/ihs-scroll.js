$(function(){

    $(window).load(function(){
        $(".sample-content").mCustomScrollbar({
            axis:"xy",
            theme:"dark-3",
            scrollButtons:{
                enable:true
            }
        });
    });

    $("#accordion .panel-body").mCustomScrollbar({
        //setHeight:100,
        theme:"dark-3"
    });
    
});  


 