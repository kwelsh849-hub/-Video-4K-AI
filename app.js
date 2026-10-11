const fileInput = document.getElementById("file");
const preview = document.getElementById("preview");
const status = document.getElementById("status");
const quality = document.getElementById("quality");
const startButton = document.getElementById("start");

let videoURL = null;

fileInput.addEventListener("change", function () {
  const file = this.files[0];

  if (!file) return;

  if (videoURL) {
    URL.revokeObjectURL(videoURL);
  }

  videoURL = URL.createObjectURL(file);
  preview.src = videoURL;
  preview.hidden = false;

  status.textContent = "Video selected: " + file.name;
});

startButton.addEventListener("click", function () {
  if (!fileInput.files.length) {