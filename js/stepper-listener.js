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
      this.el.classList.remove("isOff");
      this.el.classList.add("isOn");
      this.el.emit('hover');
      console.log(isOn);
    }

    else if (distance >= 0.5 && this.el.classList.contains("isOn")) {
      this.el.classList.remove("isOn");
      this.el.classList.ad("isOff");
      this.el.emit('leave');
      console.log(isOn);
    }
  }
});
