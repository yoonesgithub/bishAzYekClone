$(document).ready(function () {
    $(".open-details-menu").click(function(e) {
        if($(e.currentTarget).find(".material-symbols-outlined").html() == "expand_less") {
            $(e.currentTarget).find(".material-symbols-outlined").html("chevron_right");
            $(".open-details-menu").removeClass("text-green");
        } else {
            $(e.currentTarget).find(".material-symbols-outlined").html("expand_less");
            $(".open-details-menu").addClass("text-green");
        }
        $(e.currentTarget).next().first().slideToggle(300);  
    })
    $("#close-nav").click(function() {
        $("#navigation").removeClass("active")
    })
    $("#open-nav").click(function() {
        $("#navigation").addClass("active")
    })
    $(".open-form").click(function () { 
        $(".open-form").next().first().toggle(200)
    });
    $("#open-info").click(function () { 
        $("#open-chat").removeClass("active-sub-route");
        $("#open-info").addClass("active-sub-route");
        $("#info").removeClass("d-none");
        $("#chat").addClass("d-none")   
    });
    $("#open-chat").click(function() {
        $("#open-info").removeClass("active-sub-route");
        $("#open-chat").addClass("active-sub-route");
        $("#chat").removeClass("d-none");
        $("#info").addClass("d-none")
    })
});