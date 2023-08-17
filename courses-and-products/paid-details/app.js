$(document).ready(function () {
    $(".open-details-menu").click(function(e) {
        console.log($(e.currentTarget).find("span").html());
        $(e.currentTarget).find("span").html() == "remove"
        ? $(e.currentTarget).find("span").html("add")
        : $(e.currentTarget).find("span").html("remove")
        $(e.currentTarget).next().first().slideToggle(600);  
    })
});