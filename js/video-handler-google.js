AFRAME.registerComponent('video-handler-google', {

  init: function () {
   let el = this.el;
   let vid = document.querySelector("#googlefeed");
   vid.play();
  }
});
