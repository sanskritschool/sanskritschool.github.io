// Array of images and their captions
let images = [
    { src: "../images/vocab/kitchen/kitchen.png", caption: "kitchen" },
    { src: "../images/vocab/kitchen/knife.png", caption: "knife" },
    { src: "../images/vocab/kitchen/plate.png", caption: "plate" },
    { src: "../images/vocab/kitchen/spoon.png", caption: "spoon" },
    { src: "../images/vocab/kitchen/water_glass.png", caption: "water glass" }
];

let viewer = document.getElementById("imageViewer");
let viewerImage = document.getElementById("viewerImage");
let viewerCaption = document.getElementById("viewerCaption");
let currentIndex = 0;

// Function to load an image based on the index
function loadImage(index) {
    if (index < 0) index = images.length - 1;
    if (index >= images.length) index = 0;

    currentIndex = index;

    // Set image source and caption
    viewerImage.src = images[currentIndex].src;
    viewerCaption.textContent = images[currentIndex].caption;
}

// Function to change image when clicking next/previous
function changeImage(step) {
    loadImage(currentIndex + step);
}

// Function to close the viewer
function closeViewer() {
    viewer.style.display = "none";
    window.close();
}

// Automatically load the first image when the page loads
document.addEventListener("DOMContentLoaded", () => {
    viewer.style.display = "flex"; // Show the viewer on load
    loadImage(0); // Load only the first image
});
