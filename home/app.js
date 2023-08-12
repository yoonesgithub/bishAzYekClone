$( document ).ready(function() {

    // slider 
 
    $(".new-course-changer").click(function(e) {
        $(".new-course-changer").removeClass("active text-white fs-5");
        $(e.target).addClass("active text-white fs-5")
        $("#new-courses-desktop-img").attr("src",$(e.target).data("course") );
    })










});