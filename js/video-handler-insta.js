AFRAME.registerComponent('video-handler-insta', {

  init: function () {
   let el = this.el;
   let vid = document.querySelector("#instafeed");
   vid.play();
  }
});
