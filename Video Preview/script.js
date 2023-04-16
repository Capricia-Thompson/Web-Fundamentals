console.log("page loaded...");

var video = document.querySelector("video")

function startPreview() {
    video.muted = true
    video.play()
}

function stopPreview() {
    video.pause();
}
