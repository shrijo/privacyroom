AFRAME.registerComponent('trigger-listener', {
  schema: {
  },

  init: function () {
    var defaultColor = el.getAttribute('material').color;

    this.parentNode.addEventListener('hover', function () {
      alert("enter");
    });

    this.parentNode.addEventListener('leave', function () {
      alert("leave");
    });
  }
});
