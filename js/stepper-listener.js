AFRAME.registerComponent('stepper-listener', {



  tick: function () {

    var cam = document.querySelector("#cam");
    var positionPlayer = new THREE.Vector3();
    var positionSelf = new THREE.Vector3();
    var isOn = false;
    var distance



    cam.object3D.getWorldPosition(positionPlayer);
    this.el.object3D.getWorldPosition(positionSelf);

    var dx = positionPlayer.x - positionSelf.x;
    var dy = positionPlayer.z - positionSelf.z;

    var distance = Math.sqrt( dx * dx + dy * dy );

    if (distance < 0.5 && isOn==false) {
      var isOn = true;
      this.el.emit('hover');
      console.log(isOn);
    }

    if (distance >= 0.5 && isOn=true) {
      var isOn = false;
      this.el.emit('leave');
    }

    console.log(distance);
  }
});
