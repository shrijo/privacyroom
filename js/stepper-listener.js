AFRAME.registerComponent('stepper-listener', {



  tick: function () {

    var cam = document.querySelector("#cam");
    var position = new THREE.Vector3();

  //  console.log("hello");
    console.log(cam.object3D.getWorldPosition(position));
  }
});