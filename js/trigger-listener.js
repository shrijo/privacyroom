AFRAME.registerComponent('trigger-listener', {

  init: function () {
    var parentIsOn = false;
  },

  tick: function () {
    if (parentIsOn == false && this.el.parentElement.classList.contains('isOn')){
      var parentIsOn = true;
      this.el.emit('hover');
    }
    else if (parentIsOn == true && this.el.parentElement.classList.contains('isOff')){
      var parentIsOn = false;
      this.el.emit('leave');
    }
  }
});
