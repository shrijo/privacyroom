AFRAME.registerComponent('stepper-listener', {

  tick: function () {

    var cam = document.querySelector("#cam");
    var positionPlayer = new THREE.Vector3();
    var positionSelf = new THREE.Vector3();
    var distance;




    cam.object3D.getWorldPosition(positionPlayer);
    this.el.object3D.getWorldPosition(positionSelf);

    var dx = positionPlayer.x - positionSelf.x;
    var dy = positionPlayer.z - positionSelf.z;

    var distance = Math.sqrt( dx * dx + dy * dy );

    if (distance < 0.5 && this.el.classList.contains("isOff")) {
      this.el.classList.replace("isOff", "isOn")
      this.el.emit('hover');
    }

    else if (distance >= 0.5 && this.el.classList.contains("isOn")) {
      this.el.classList.replace("isOn", "isOff")
      this.el.emit('leave');
    }
  }
});
