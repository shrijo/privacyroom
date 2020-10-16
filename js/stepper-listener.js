AFRAME.registerComponent('stepper-listener', {



  tick: function () {

    var cam = document.querySelector("#cam");
    var positionPlayer = new THREE.Vector3();
    var positionSelf = new THREE.Vector3();



    cam.object3D.getWorldPosition(positionPlayer);
    this.el.object3D.getWorldPosition(positionSelf);


    function distanceVector( positionPlayer, positionSelf )
    {
        var dx = v1.x - v2.x;
        var dy = v1.y - v2.y;

        return Math.sqrt( dx * dx + dy * dy );
    }

  //  console.log("hello");
    console.log(distanceVector);
  }
});
