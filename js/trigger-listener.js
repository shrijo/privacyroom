AFRAME.registerComponent('trigger-listener', {

  schema: {
    parentIsOn: {default: false}
  },

  tick: function () {
    if (this.data.parentIsOn == false && this.el.parentElement.classList.contains('isOn')){
      this.el.setAttribute('parentIsOn', true);
      alert('enter');
    }
    else if (this.data.parentIsOn == true && this.el.parentElement.classList.contains('isOff')){
      this.el.setAttribute('parentIsOn', false);
      alert('leave');
    }
    console.log(parentIsOn);
  }
});
