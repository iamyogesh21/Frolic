// preloder start
var preloder = document.getElementById('preloder')

function show() {
    preloder.style.display = 'none';
}
// preloder end

// game trailer started
function toggle() {
    var trailer = document.querySelector('#onetra');
    var video = document.querySelector('video');
    onetra.classList.toggle('active')
    video.currentTime = 0;
    video.pause();
}

function toggletwo() {
    var trailer = document.querySelector('#twotra');
    var video = document.querySelector('video');
    twotra.classList.toggle('active')
    video.currentTime = 0;
    video.pause();
}

function togglethree() {
    var trailer = document.querySelector('#threetra');
    var video = document.querySelector('video');
    threetra.classList.toggle('active')
    video.currentTime = 0;
    video.pause();
}
// game trailer end