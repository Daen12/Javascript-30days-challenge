//Bring our elements
const player = document.querySelector(".player");
const video = player.querySelector(".viewer"); //class of actual video
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

//Build our functions
function togglePlay() {
    //paused is a property that lives on 'video'
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
    // const method = video.paused ? "play" : "pause";
    // video[method](); //can also write this way
}
function updateButton() {
    const icon = this.paused ? "►" : "❚ ❚";
    toggle.textContent = icon;
}
function skip() {
    //visit the actual DOM element and look at the skip buttons to see how much we skip
    console.log(this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip);
}
function handleRangeUpdate() {
    video[this.name] = this.value; //?
}
function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
} //this function alone doesn't update progress real time.
function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

//Hook up the event listeners
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handleProgress);
toggle.addEventListener("click", togglePlay); //when clicking both video screen and toggle, it works
skipButtons.forEach((button) => button.addEventListener("click", skip));
ranges.forEach((range) => range.addEventListener("change", handleRangeUpdate));
let mousedown = false;
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (e) => mousedown && scrub(e)); //also apply scrub when we're dragging on the progress bar. If mousedown is false, it's not going to run the scrub. Only runs when it's true
progress.addEventListener("mousedown", () => {
    mousedown = true;
});
progress.addEventListener("mouseup", () => {
    mousedown = false;
});
