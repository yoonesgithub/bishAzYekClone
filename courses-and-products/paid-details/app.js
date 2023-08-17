$(document).ready(function () {
    $(".open-details-menu").click(function(e) {
        console.log($(e.currentTarget).find("span").html());
        $(e.currentTarget).find("span").html() == "remove"
        ? $(e.currentTarget).find("span").html("add")
        : $(e.currentTarget).find("span").html("remove")
        $(e.currentTarget).next().first().slideToggle(600);  
    })
    $("#go-up").click(function (e) { 
        window.scrollTo(0,0);
    });
    $(window).scroll(function (e) { 
        if (isElementInView("#form-moshavere")) {
            $("#form-moshavere").addClass("animate-fade");
          } 
        if (isElementInView("#khadamat-cnt")) {
            $(".khadamat-card").addClass("animate-fade");
          } 
        if (isElementInView("#mataleb-cnt")) {
            $(".matlab-card").addClass("animate-fade");
          } 
        if (isElementInView("#animate-rtl")) {
            $("#animate-rtl").addClass("animate-rtl");
          } 
        if (isElementInView("#animate-ltr")) {
            $("#animate-ltr").addClass("animate-ltr");
          } 
    });
    function isElementInView(id) {
        el = document.querySelector(id);
        var rect = el.getBoundingClientRect();
        // return (
        //   rect.top >= 0 &&
        //   rect.left >= 0 &&
        //   rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        //   rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        // );
        return (
            rect.top < window.innerHeight / 10 * 9
        )
    }
});