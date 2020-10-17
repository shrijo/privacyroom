AFRAME.registerComponent('trigger-listener', {

  init: function () {
    var parentIsOn = false;
  },

  tick: function () {
    if (this.parentNode.classList.contains('isOn')){
      alert('hello')
    }
  }
});
