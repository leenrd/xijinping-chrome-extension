const replacementImageURL = "https://via.placeholder.com/150";

function replaceImages() {
  const images = document.querySelectorAll("img");
  images.forEach((img) => {
    img.src = replacementImageURL;
  });
}

replaceImages();
