// Array of images and their captions
let images = [
  {
    src: "../images/vocab/kitchen/kitchen.png",
    caption: "पाकशाला ● स्त्रीलिङ्गः",
    audio: "/audio/pic_dict/kitchen/kitchen.m4a",
  },
  {
    src: "../images/vocab/kitchen/knife.png",
    caption: "छुरिका ● स्त्रीलिङ्गः",
    audio: "/audio/pic_dict/kitchen/knife.m4a",
  },
  {
    src: "../images/vocab/kitchen/plate.png",
    caption: "स्थालिका ● स्त्रीलिङ्गः",
    audio: "/audio/pic_dict/kitchen/plate.m4a",
  },
  {
    src: "../images/vocab/kitchen/spoon.png",
    caption: "चमसः ● पुल्लिङ्गः",
    audio: "/audio/pic_dict/kitchen/spoon.m4a",
  },
  {
    src: "../images/vocab/kitchen/water_glass.png",
    caption: "चषकः ● पुल्लिङ्गः",
    audio: "/audio/pic_dict/kitchen/water_glass.m4a",
  },
  {
    src: "../images/vocab/kitchen/vessel.png",
    caption: "पात्रम् ● नपुंसकलिङ्गः",
    audio: "/audio/pic_dict/kitchen/vessel.m4a",
  },
  {
    src: "../images/vocab/kitchen/rolling_pin.png",
    caption: "वेल्लनी ● स्त्रीलिङ्गः",
    audio: "/audio/pic_dict/kitchen/rolling_pin.m4a",
  },
  {
    src: "../images/vocab/kitchen/stove.png",
    caption: "चुल्लिका ● स्त्रीलिङ्गः",
    audio: "/audio/pic_dict/kitchen/stove.m4a",
  },
  {
    src: "../images/vocab/kitchen/bowl.png",
    caption: "कंसः ● पुल्लिङ्गः",
    audio: "/audio/pic_dict/kitchen/bowl.m4a",
  },
  {
    src: "../images/vocab/kitchen/apron.png",
    caption: "प्रच्छादकः ● पुल्लिङ्गः",
    audio: "/audio/pic_dict/kitchen/apron.m4a",
  },
  {
    src: "../images/vocab/kitchen/cupboard.png",
    caption: "कपाटिका ● स्त्रीलिङ्गः",
    audio: "/audio/pic_dict/kitchen/cupboard.m4a",
  },
  {
    src: "../images/vocab/kitchen/female_chef.png",
    caption: "पाचिका ● स्त्रीलिङ्गः",
    audio: "/audio/pic_dict/kitchen/female_chef.m4a",
  },
  {
    src: "../images/vocab/kitchen/fridge.png",
    caption: "प्रशीतकम ● नपुंसकलिङ्गः",
    audio: "/audio/pic_dict/kitchen/fridge.m4a",
  },
  {
    src: "../images/vocab/kitchen/frying_pan.png",
    caption: "भर्जनपात्रम् ● नपुंसकलिङ्गः",
    audio: "/audio/pic_dict/kitchen/frying_pan.m4a",
  },
  {
    src: "../images/vocab/kitchen/grater.png",
    caption: "कर्षणयन्त्रम् ● नपुंसकलिङ्गः",
    audio: "/audio/pic_dict/kitchen/grater.m4a",
  },
  {
    src: "../images/vocab/kitchen/kitchen_sink.png",
    caption: "प्रक्षालनस्थलम् ● नपुंसकलिङ्गः",
    audio: "/audio/pic_dict/kitchen/kitchen_sink.m4a",
  },
  {
    src: "../images/vocab/kitchen/ladle.png",
    caption: "दर्वी ● स्त्रीलिङ्गः",
    audio: "/audio/pic_dict/kitchen/ladle.m4a",
  },
  {
    src: "../images/vocab/kitchen/male_chef.png",
    caption: "पाचकः ● पुल्लिङ्गः",
    audio: "/audio/pic_dict/kitchen/male_chef.m4a",
  },
  {
    src: "../images/vocab/kitchen/measuring_cups.png",
    caption: "मापनपात्रम् ● नपुंसकलिङ्गः",
    audio: "/audio/pic_dict/kitchen/measuring_cups.m4a",
  },
  {
    src: "../images/vocab/kitchen/strainer.png",
    caption: "शोधनी ● स्त्रीलिङ्गः",
    audio: "/audio/pic_dict/kitchen/strainer.m4a",
  },
  {
    src: "../images/vocab/kitchen/tong.png",
    caption: "सन्दंशः ● पुल्लिङ्गः",
    audio: "/audio/pic_dict/kitchen/tong.m4a",
  },
  {
    src: "../images/vocab/kitchen/water_pitcher.png",
    caption: "जलकलशः ● पुल्लिङ्गः",
    audio: "/audio/pic_dict/kitchen/water_pitcher.m4a",
  },
  {
    src: "../images/vocab/kitchen/blender.png",
    caption: "मिश्रयन्त्रम् ● नपुंसकलिङ्गः",
    audio: "/audio/pic_dict/kitchen/blender.m4a",
  },
  {
    src: "../images/vocab/kitchen/cutting_board.png",
    caption: "छेदनफलकम् ● नपुंसकलिङ्गः",
    audio: "/audio/pic_dict/kitchen/cutting_board.m4a",
  },
  {
    src: "../images/vocab/kitchen/napkin.png",
    caption: "प्रोञ्छः ● पुल्लिङ्गः",
    audio: "/audio/pic_dict/kitchen/napkin.m4a",
  },
  {
    src: "../images/vocab/kitchen/fire_extinguisher.png",
    caption: "अग्निनिवारकः ● पुल्लिङ्गः",
    audio: "/audio/pic_dict/kitchen/fire_extinguisher.m4a",
  },
  {
    src: "../images/vocab/kitchen/peeler.png",
    caption: "शाकफलत्वक्छेदकः ● पुल्लिङ्गः",
    audio: "/audio/pic_dict/kitchen/peeler.m4a",
  },
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

  // Apply Sanskrit font size from localStorage to caption
  const savedFontSize = localStorage.getItem("sanskritFontSize");
  if (savedFontSize) {
    viewerCaption.style.fontSize = savedFontSize;
  }

// Function to load an image based on the index
function loadImage(index) {
  if (index < 0) index = images.length - 1;
  if (index >= images.length) index = 0;

  currentIndex = index;

  // Set image source and caption
  viewerImage.src = images[currentIndex].src;
  viewerImage.draggable = false; // Prevent dragging the image
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

/*
 kitchen: pressure cooker, randradarvi, samadarvi, 254, 257, 258
 full kitchen utensil glossary
 nature: waterfall
 measuring tape
 */