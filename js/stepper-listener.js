AFRAME.registerComponent('stepper-listener', {



  tick: function () {

    var cam = document.querySelector("#cam");

  //  console.log("hello");
    console.log(cam.getWorldPosition(position));
  }
});
