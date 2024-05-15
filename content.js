const replacementImageURL = "./xi.webp";

function replaceImages() {
  const images = document.querySelectorAll("img");
  images.forEach((img) => {
    img.src = replacementImageURL;
  });
}

replaceImages();
