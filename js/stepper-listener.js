AFRAME.registerComponent('stepper-listener', {

  tick: function () {

    var camera = document.querySelector("#cam");
    var positionPlayer = new THREE.Vector3();
    var positionSelf = new THREE.Vector3();
    String triggeredPost = this.el.dataset.trigger;

    var post = document.getElementById(triggeredPost);

    var distance;

    positionPlayer.setFromMatrixPosition(camera.object3D.matrixWorld);

    this.el.object3D.getWorldPosition(positionSelf);

    var dx = positionPlayer.x - positionSelf.x;
    var dy = positionPlayer.z - positionSelf.z;

    var distance = Math.sqrt( dx * dx + dy * dy );

    if (distance < 0.5 && this.el.classList.contains("isOff")) {
      this.el.classList.replace("isOff", "isOn")
      this.el.emit('hover');
      post.emit('hover');
    }

    else if (distance >= 0.5 && this.el.classList.contains("isOn")) {
      this.el.classList.replace("isOn", "isOff")
      this.el.emit('leave');
      post.emit('leave');
    }
  }
});
