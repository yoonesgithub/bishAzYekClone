const videoFrame = document.getElementById("video")
function changeVideoSource(newsrc) {
    console.log('change');
    videoFrame.setAttribute('src', newsrc)
    console.log(videoFrame.getAttribute("src"));
}