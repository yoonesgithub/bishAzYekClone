$(document).ready(function () {
    menuFlag = false;
    $("#menu-btn").click(function () { 
        console.log($("nav"));
        if(menuFlag) {
            $("nav").slideUp()
            $("#menu-btn").text("menu")
        } else {
            $("#menu-btn").text("close")
            $("header nav").slideDown();
        }
        menuFlag = !menuFlag
    });
    $("#open-search-menu").click(function () { 
        $("#search-menu").toggle(300);
    });
    $("#close-search-menu").click(function () { 
        $("#search-menu").toggle(300); 
    });

    let searchKey;
    $("#search-input").keyup(function(event) {
        searchKey =  $("#search-input").val();
        (event.keyCode == 13) && search(searchKey);
    })
    function search(input) {
        $("#search-menu").toggle(300);
        $("#search-input").val("");
        location.search = `s=${input}`;
    }
});