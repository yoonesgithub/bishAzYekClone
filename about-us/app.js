$(document).ready(function () {
    $("#about-us-btn").click(function () {
        changeContent("#about-us-btn")
        $(".about-us-content-lg").addClass("d-lg-block")
        $(".about-us-content").removeClass("d-none")
    });
    $("#contact-us-btn").click(function () {  
        changeContent("#contact-us-btn")
        $(".contact-us-content-lg").addClass("d-lg-block")
        $(".contact-us-content").removeClass("d-none")
    });
    $("#colleague-btn").click(function () {
        changeContent("#colleague-btn")
        $(".colleague-content-lg").addClass("d-lg-block")
        $(".colleague-content").removeClass("d-none")
    });
    function changeContent(id) {
        $(".change-btn").removeClass("text-white gradient-bg-green");
        $(id).addClass("text-white gradient-bg-green");
        $(".dynamic-content").addClass("d-none");
        $(".dynamic-content-lg").removeClass("d-lg-block")
    }
    $(".open-menu").click(function(e) {
        console.log("click");
        $(".open-menu").removeClass("gradient-bg-green text-white");
        $(e.currentTarget).addClass("gradient-bg-green text-white");
        ($(e.currentTarget).find("span").text() == "remove") ? ($(e.currentTarget).find("span").text("expand_more")) : ($(e.currentTarget).find("span").text("remove"))  
        $(".toggling-menu").removeClass("t-1000 open");
        $(e.currentTarget).next().first().addClass("t-1000 open");
    })
});