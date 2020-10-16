AFRAME.registerComponent('stepper-listener', {

  var cam = document.querySelector("#cam");

  tick: function () {
    console.log("hello");
  //  console.log(cam.el.object3D.getWorldPosition(position));
  }
});
