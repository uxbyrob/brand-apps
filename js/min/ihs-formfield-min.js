$(function(){var e="";$(".required").each(function(){$(this).closest(':has("label")').find("label").addClass("required-add"),$(this).remove()}),$(".form-control-feedback").prev().keyup(function(){var e=$(this);e.attr("readonly")||e.attr("disabled")||e.next("span").toggle(Boolean(e.val()))}),$(".form-control-feedback.ihs-icon-x").click(function(){$(this).prev("input").val("").focus(),$(this).hide()}).hide($(this).prev("input").val())});