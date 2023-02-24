$(document).ready(function () {
  if (
    !$("#myCanvas").tagcanvas(
      {
        textColour: "#ff533d",
        outlineThickness: 0.5,
        maxSpeed: 0.06,
        freezeActive: true,
        shuffleTags: true,
        shape: "sphere",
        zoom: 0.8,
        wheelZoom: false,
        noSelect: true,
        textFont: null,
        freezeDecel: true,
        fadeIn: 3000,
        initial: [0.3, -0.1],
        depth: 1.1,
      },
      "tags"
    )
  ) {
    // something went wrong, hide the canvas container
    $("#myCanvasContainer").hide();
  }
});
