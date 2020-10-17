AFRAME.registerComponent('trigger-listener', {

  schema: {
    parentIsOn: {default: false}
  },

  tick: function () {
    if (this.data.parentIsOn == false && this.el.parentElement.classList.contains('isOn')){
      this.data.parentIsOn = true;
      this.el.emit('open');
    }
    else if (this.data.parentIsOn == true && this.el.parentElement.classList.contains('isOff')){
      this.data.parentIsOn = false;
      this.el.emit('close');
    }
  }
});
