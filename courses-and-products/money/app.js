$(document).ready(function () {
    $("#open-category-menu").click(function() {
        console.log($("#category-menu"));
        $("#category-menu").addClass("active");
        $("#blur-back").show(500);
    })
    $("#close-category-menu").click(function() {
        console.log($("#category-menu"));
        $("#category-menu").removeClass("active");
        $("#blur-back").hide(500);
    })
});