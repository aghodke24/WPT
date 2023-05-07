function calculate() {
    var num1 = parseInt(prompt("Enter a number: "));
    var num2 = parseInt(prompt("Enter a number: "));
    var operator = prompt("enter operator")
    var result;
    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
      default:
        return "Invalid operator";
    }
    return result;
  }
  alert(calculate())
  console.log(calculate());