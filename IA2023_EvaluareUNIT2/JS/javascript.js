document.addEventListener("DOMContentLoaded", function () {
  const selection = document.getElementById("slideshow");
  const images = selection.getElementsByTagName("img");
  let indeximagine = 0;
  let slideshowActive = false;

  selection.addEventListener("dblclick", function () {
      if (!slideshowActive) {
          activateSlideshow();
          slideshowActive = true;
      } else {
          indeximagine = (indeximagine + 1) % images.length;
          updateDisplayedImage();
      }
  });

  function activateSlideshow() {
      setInterval(function () {
          indeximagine = (indeximagine + 1) % images.length;
          updateDisplayedImage();
      }, 3000);
  }

  function updateDisplayedImage() {
      for (let i = 0; i < images.length; i++) {
          images[i].style.display = i === indeximagine ? "block" : "none";
      }
  }
});