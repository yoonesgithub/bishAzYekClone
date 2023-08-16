$(document).ready(function () {
    function checkLogin(isLoggedIn) {
        // با این قطعه کد لاگین بودن یا نبودن یوزر چک میشود و تصمیم میگیریم 
        // به صفحه ثبت نام یا لاگین بریم
        // یا اگر لاگین بود کلیک روی دکمه به پنل یوزر میرود
        if(isLoggedIn) {
            $("#login-enter-btn").attr("href", "/my-account/panel.html");
            $("#login-enter-btn").find("p").text("حساب‌ کاربری‌ من");
            $("#login-enter-btn").find("span").html("person");
            $("#open-basket").removeClass("d-none");
        } else {
            $("#login-enter-btn").attr("href", "/login/login.html");
            $("#login-enter-btn").find("p").text("ورود/ثبت‌نام");
        }
    }

    checkLogin(true)
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
    $("#open-basket").click(function() {
        $("#basket-container").show(100);
        toggleBasketMenu();
    })
    // مقدار تایم اوت باید با مقدار ترنزیشن ست شده در سی اس اس
    // "#basket-menu" === t-500
    // برابر باشد 
    $("#close-basket").click(function() {
        hidebasket(500)
    })
    $("#basket-container").click(function (e) {
        e.target.id == "basket-cover" && hidebasket(500);
        
    });
    function hidebasket(timer) {
        toggleBasketMenu();
        setTimeout(() => {
            $("#basket-container").hide(100);
        }, timer);
    }
    function toggleBasketMenu() {
        $("#basket-menu").toggleClass("active");
    }
});