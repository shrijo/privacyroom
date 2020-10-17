AFRAME.registerComponent('trigger-listener', {

  init: function () {
    var parentIsOn = false;
  },

  tick: function () {
    if (parentIsOn == false && this.el.parentElement.classList.contains('isOn')){
      var parentIsOn = true;
      alert('enter');
    }
    else if (parentIsOn == true && this.el.parentElement.classList.contains('isOff')){
      var parentIsOn = false;
      alert('leave');
    }
    console.log(parentIsOn);
  }
});
