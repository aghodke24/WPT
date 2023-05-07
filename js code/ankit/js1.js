function largestOfThree(a, b, c) {
    if (a > b && a > c) {
      return a;
    } else if (b > a && b > c) {
      return b;
    } else {
      return c;
    }
  }
  
  let num1 = prompt("Enter the first positive number:");
  let num2 = prompt("Enter the second positive number:");
  let num3 = prompt("Enter the third positive number:");
  
  let result = largestOfThree(num1, num2, num3);
  alert(`The largest number is: ${result}`)
  console.log(`The largest number is: ${result}`);