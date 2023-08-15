$(document).ready(function () {
    $("#open-panel-links").click(function() {
        console.log("click");
        $("#panel-links").toggleClass("d-none");
    })
});