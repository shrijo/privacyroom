AFRAME.registerComponent('stepper-listener', {

  init: function () {
    this.isOn = false;
  },

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

    if (distance < 0.5 && this.isOn==false) {
      this.isOn = true;
      this.el.emit('hover');
      console.log(isOn);
    }

    if (distance >= 0.5 && this.isOn==true) {
      this.isOn = false;
      this.el.emit('leave');
      console.log(isOn);
    }
  }
});
