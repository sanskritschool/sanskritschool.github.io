// Array of images and their captions
let images = [
    { src: "../images/vocab/kitchen/kitchen.png", caption: "पाकशाला : स्त्रीलिङ्ग : पाक", audio: "../images/vocab/kitchen/kitchen.m4a" },
    { src: "../images/vocab/kitchen/knife.png", caption: "चूरिका : स्त्रीलिङ्ग : चूरि", audio: "../images/vocab/kitchen/kitchen.m4a" },
    { src: "../images/vocab/kitchen/plate.png", caption: "स्थालिका : स्त्रीलिङ्ग : स्थालि", audio: "../images/vocab/kitchen/kitchen.m4a" },
    { src: "../images/vocab/kitchen/spoon.png", caption: "चमसः : पुल्लिङ्ग : चमस", audio: "../images/vocab/kitchen/kitchen.m4a" },
    { src: "../images/vocab/kitchen/water_glass.png", caption: "चषकः : पुल्लिङ्ग : चषक", audio: "../images/vocab/kitchen/kitchen.m4a" },
    { src: "../images/vocab/kitchen/vessel.png", caption: "पात्रम् : नपुंसकलिङ्ग : पात्र", audio: "../images/vocab/kitchen/kitchen.m4a" }

];

// Function to shuffle images using Fisher-Yates algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Shuffle images array before displaying
shuffleArray(images);

let viewer = document.getElementById("imageViewer");
let viewerImage = document.getElementById("viewerImage");
let viewerCaption = document.getElementById("viewerCaption");
let audioPlayer = new Audio(); // Create an audio object
let currentIndex = 0;

// Function to load an image based on the index
function loadImage(index) {
    if (index < 0) index = images.length - 1;
    if (index >= images.length) index = 0;

    currentIndex = index;

    // Set image source and caption
    viewerImage.src = images[currentIndex].src;
    viewerCaption.textContent = images[currentIndex].caption;

    // Update audio source
    audioPlayer.src = images[currentIndex].audio;
}

// Function to change image when clicking next/previous
function changeImage(step) {
    loadImage(currentIndex + step);
}

// Function to play audio
function playAudio() {
    if (audioPlayer.src) {
        audioPlayer.play();
    }
}

// Function to close the viewer
function closeViewer() {
    viewer.style.display = "none";
    window.close();
}

// Automatically load the first image when the page loads
document.addEventListener("DOMContentLoaded", () => {
    viewer.style.display = "flex"; // Show the viewer on load
    loadImage(0); // Load the first image from the shuffled array
});
