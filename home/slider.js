$(document).ready(function () {
    let photos = [
        "./photo-slider/2.jpg",
        "./photo-slider/3.jpg",
        "./photo-slider/4.jpg",
        "./photo-slider/5.jpg",
        "./photo-slider/6.png"
    ];
    let videos = [
        "./254-how-js-engine-work.mp4",
        "./253-ecma-and-engine.mp4",
        "./252-history-of-js.mp4",
        "./Y2Mate.is - Mortal Kombat 1 - Official Announcement Trailer-UZ6eFEjFfJ0-1080p-1658246535765.mp4"
    ]
    let sliderTimer = 5000;
    let photoIndex = 5;
    function getSliderDuration() {
        return new Promise((res) => {
            res(sliderTimer)
        })
    }
    getSliderDuration().then(result => {
        setInterval(() => {
            slideForward("#slider-img",getPhoto);
            // slideForward("#slider-video",getVideo)
        }, result);
    })
    function getLength(arr) {
        return arr.length;
    }
    function getPhoto(index) {
        return photos[index] ?? photos[0]
    }
    function getVideo(index) {
        return videos[index]
    }
    function setSlideDuration(input) {
        // number validation
        // ارتباط با سرور و ست کردن مقدار 
    }
    let photo;
    function loadSliderContent(id,index,contenLoaderFn) {
        content = contenLoaderFn(index);
        $(id).attr("src", content);
    }
    function slideForward(id,contenLoaderFn) {
        console.log(id);
        (photoIndex++ < getLength(photos)-1) ? photoIndex : photoIndex = 0;
        loadSliderContent(id,photoIndex,contenLoaderFn)
    }
    function slideBack(id,contenLoaderFn) {
        (photoIndex-- > 0) ? photoIndex : (photoIndex = getLength(photos)-1);
        loadSliderContent(id,photoIndex,contenLoaderFn)
    }
    $("#slide-forwar-btn").click(function () { 
        slideForward("#slider-img",getPhoto)
    });
    $("#slide-back-btn").click(function () { 
        slideBack("#slider-img",getPhoto)
    });
    $("#slide-forwar-btn-video").click(function () { 
        slideForward("#slider-video",getVideo)
    });
    $("#slide-back-btn-video").click(function () { 
        slideBack("#slider-video",getVideo)
    });
    loadSliderContent("#slider-img",0,getPhoto)
    loadSliderContent("#slider-video",0,getVideo)
});