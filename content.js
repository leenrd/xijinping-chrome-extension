// URL of the replacement image
const replacementImageURL = chrome.runtime.getURL("xi.webp");

// Function to replace all images
function replaceImages() {
  const images = document.querySelectorAll("img");
  images.forEach((img) => {
    img.src = replacementImageURL;
    img.srcset = replacementImageURL; // Handle srcset attribute for responsive images
  });
}

// Run the replaceImages function when the content script is loaded
replaceImages();
