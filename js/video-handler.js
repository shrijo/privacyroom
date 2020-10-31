AFRAME.registerComponent('video-handler',{
  init: functon(){
   let el = this.el;
   let vid = document.querySelector("#myvideo");
   vid.play();
  }
});
