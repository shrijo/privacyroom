AFRAME.registerComponent('video-handler', {

  init: function () {
   let el = this.el;
   let vid = document.querySelector("#googlefeed");
   vid.play();
  }
});
