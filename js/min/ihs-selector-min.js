$(function(){function t(){var e=0,n=$("#contents .more").outerWidth(!0),o=$("#contents .more").data("width");$("#contents > li:not(.more)").each(function(){e+=$(this).outerWidth(!0)});var i=$("#advanced").outerWidth(!0)-(n+o);if(e>i){var r=$("#contents > li:not(.more)").last();r.attr("data-width",r.outerWidth(!0)),r.prependTo($("#contents .more ul.menu-hidden")),t()}else{var s=$("#contents li.more li").first();e+s.data("width")<i&&(s.insertBefore($("#contents .more")),t())}$(".more li").length>0?$(".more").css("display","inline-block"):$(".more").css("display","none")}$(window).on("resize load",function(){t()}),$(".select-menu").bootstrapSelect({"button-style":"btn-primary"}),$(".select-menu-short").bootstrapSelect({"button-style":"btn-primary","field-size":"input-sm"})});