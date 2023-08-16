$(document).ready(function () {
    $(".open-details-menu").click(function(e) {
        console.log($(e.currentTarget).find("span").html());
        $(e.currentTarget).find("span").html() == "keyboard_double_arrow_up"
        ? $(e.currentTarget).find("span").html("keyboard_double_arrow_down")
        : $(e.currentTarget).find("span").html("keyboard_double_arrow_up")
        $(e.currentTarget).next().first().slideToggle(300);  
    })
});