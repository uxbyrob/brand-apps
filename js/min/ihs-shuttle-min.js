$(function(){$("body").on("click",".list-group .list-group-item",function(){$(this).toggleClass("active"),"list-left container"===$(this).parent().parent().attr("class")?$(".move-right").addClass("active"):$(".move-left").addClass("active")}),$(".list-arrows button").click(function(){var e=$(this),t="",l="";e.hasClass("move-left")?(t=$(".list-right ul li.active"),l=t.clone().prependTo(".list-left ul"),l.removeClass("active",500),t.remove(),e.removeClass("active").blur()):e.hasClass("move-right")&&(t=$(".list-left ul li.active"),l=t.clone().prependTo(".list-right ul"),l.removeClass("active",500),t.remove(),e.removeClass("active").blur())}),$("#add").click(function(){return!$("#select1 option:selected").remove().appendTo("#select2")}),$("#add-all").click(function(){return!$("#select1").children().appendTo("#select2")}),$("#remove").click(function(){return!$("#select2 option:selected").remove().appendTo("#select1")}),$("#remove-all").click(function(){return!$("#select2").children().appendTo("#select1")})});