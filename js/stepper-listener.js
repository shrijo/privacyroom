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

    if (distance < 0.5 && isOn=false) {
      isOn = true;
      this.el.emit('hover');
    }

    if (distance >= 0.5 && isOn=true) {
      isOn = false;
      this.el.emit('leave');
    }

    //console.log(distance);
  }
});
