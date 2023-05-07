function sumOfDigits() {
    var num = parseInt(prompt("Enter a positive integer less than 1000: "));
    if (num < 0 || num >= 1000) {
      alert("Entered number is out of range");
      return;
    }
    var sum = 0;
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    alert("Sum of the digits of " + num + " is " + sum);
  }
  
  sumOfDigits();
  