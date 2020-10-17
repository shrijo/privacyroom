AFRAME.registerComponent('trigger-listener', {

  init: function () {
    var parentIsOn = false;
  },

  tick: function () {
    if (this.parentElement.classList.contains('isOn')){
      alert('hello');
    }
  }
});
