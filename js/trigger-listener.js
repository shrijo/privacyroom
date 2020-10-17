AFRAME.registerComponent('trigger-listener', {
  schema: {
  },

  init: function () {
    var data = this.data;
    var el = this.el;  // <a-box>
    var defaultColor = el.getAttribute('material').color;

    el.addEventListener('hover', function () {
      alert("hello")
    });

    el.addEventListener('leave', function () {
      alert("by")
    });
  }
});
