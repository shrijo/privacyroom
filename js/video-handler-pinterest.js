AFRAME.registerComponent('video-handler-pinterest', {

  init: function () {
   let el = this.el;
   let vid = document.querySelector("#pinterestfeed");
   vid.play();
  }
});
