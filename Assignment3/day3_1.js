var num1= parseInt(prompt("Enter first number: "));
var num2= parseInt(prompt("Enter first number: "));
var num3= parseInt(prompt("Enter first number: "));

if(num1 > num2 && num1 > num3){
    alert(`${num1} is largest`);
}
else if(num2 > num1 && num2 > num3){
    alert(`${num2} is largest`);
}
else{
    alert(`${num3} is largest`);
}