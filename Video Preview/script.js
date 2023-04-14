console.log("page loaded...");

var video = document.querySelector("video")

function startPreview() {
    video.muted = true
    video.play()
}

// function stopPreview() {
//     video.pause()
// }

// const video = document.querySelector("video");

// function startPreview() {
//     // video.muted = true;
//     video.currentTime = 1;
//     video.playbackRate = 0.5;
//     video.play();
// }

function stopPreview() {
    video.currentTime = 0;
    video.playbackRate = 1;
    video.pause();
}
