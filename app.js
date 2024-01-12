document.getElementById("musicPlayer").innerHTML =
  "<audio controls volume preload='none' src='music.mp3'></audio>";

$("#playButton").on("click", function () {
  $("#pauseButton").show();
  $("#playButton").hide();
});
$("#pauseButton").on("click", function () {
  $("#playButton").show();
  $("#pauseButton").hide();
});
