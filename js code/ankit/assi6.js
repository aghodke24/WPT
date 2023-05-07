function sumOfDigits() {
    var num = parseInt(prompt("Enter a number: "));
    var sum = 0;
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    return sum;
  }
  alert(sumOfDigits())
  console.log(sumOfDigits())