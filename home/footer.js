$(document).ready(function () {
    $(".open-footer-menu").click(function(e) {
        console.log("click");
        ($(e.currentTarget).find("span").text() == "remove") ? ($(e.currentTarget).find("span").text("expand_more")) : ($(e.currentTarget).find("span").text("remove"))  
        $(e.currentTarget).next().first().toggleClass("open");
    })

});