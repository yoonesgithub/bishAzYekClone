$(document).ready(function () {
    let filesSlider = [
        {
            content: '../home/photo-slider/2.jpg',
            link: '#',
            title: 'فایل‌سل:فروشگاه‌ساز‌تخصصی‌محصولات دانلودی',
            text: 'سالها تجربه طراحی و برنامه نویسی وب را به کار گرفته ایم تا فروشگاهی درخور فعالیت اینترنتی شما طراحی و اماده کنیم',
            btn: 'ثبت نام'
        },
        {
            content: '../home/photo-slider/3.jpg',
            link: '#',
            title: 'فایل‌سل:فروشگاه‌ساز‌تخصصی‌محصولات دانلودی',
            text: 'سالها تجربه طراحی و برنامه نویسی وب را به کار گرفته ایم تا فروشگاهی درخور فعالیت اینترنتی شما طراحی و اماده کنیم',
            btn:'ثبت نام'
        },
        {
            content: '../home/photo-slider/4.jpg',
            link: '#',
            title: 'فایل‌سل:فروشگاه‌ساز‌تخصصی‌محصولات دانلودی',
            text: 'سالها تجربه طراحی و برنامه نویسی وب را به کار گرفته ایم تا فروشگاهی درخور فعالیت اینترنتی شما طراحی و اماده کنیم',
            btn: 'ثبت نام'
        },
    ]
    let photoIndex = 0;
    function getLength(arr) {
        return arr.length;
    }
    function slideForward() {
        (photoIndex++ < getLength(filesSlider)-1) ? photoIndex : photoIndex = 0;
    }
    function slideBack() {
        (photoIndex-- > 0) ? photoIndex : (photoIndex = getLength(filesSlider)-1);
    }
    $("#files-slide-back-btn").click(function() {
        console.log('back');
        slideBack();
        loadContent(photoIndex)
    })
    $("#files-slide-forward-btn").click(function() {
        slideForward()
        loadContent(photoIndex)
    })
    function loadContent(id) {
        let content = filesSlider[id];
        $("#files-slider-img").attr("src",content.content);
        $("#files-slider-link").attr("href",content.linl);
        $("#files-title").text(content.title);
        $("#files-text").text(content.text);
        $("#files-btn").html(content.btn);
    }
    loadContent(0)
    setTimeout(() => {
        $("#file").addClass("active-link")
    }, 1);
});