function getMin() {
    var min = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
      if (arguments[i] < min) {
        min = arguments[i];
      }
    }
    return min;
  }
  alert(getMin(6.5, 4))
  