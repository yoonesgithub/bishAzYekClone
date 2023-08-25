$(document).ready(function () {
    $("#unlimmit").click(function () { 
        $("#unlimmit p ").hide()
        $("#unlimmit span").hide()
        $("#limited-p").removeClass("limited-p");
    });
    $(document).scroll(function (e) { 
        if($(e.target).scrollTop() > 100) {
            $("#price").removeClass('less-lg-none');
        } else {
            $("#price").addClass('less-lg-none');
        }
    });
});