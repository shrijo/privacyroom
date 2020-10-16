AFRAME.registerComponent('stepper-listener', {



  tick: function () {

    var cam = document.querySelector("#cam");
    var positionPlayer = new THREE.Vector3();
    var positionSelf = new THREE.Vector3();



    cam.object3D.getWorldPosition(positionPlayer));
    this.el.object3D.getWorldPosition(positionSelf);

    var distance = positionSelf.distanceTo( positionPlayer );

  //  console.log("hello");
    console.log(distance);
  }
});
