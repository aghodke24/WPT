function pow() {
    var x=parseInt(prompt("Enter a number: "));
    var y=parseInt(prompt("Enter a number: "));
    var result = 1;
    for (var i = 0; i < y; i++) {
      result *= x;
    }
    return result;
  }
  alert(pow())
  console.log(pow());