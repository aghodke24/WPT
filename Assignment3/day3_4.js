var num1= parseInt(prompt("Enter first number: "));
var num2= parseInt(prompt("Enter first number: "));
var opr = prompt("Enter operator: (+,-,*,/) :");
var res;
if(opr === "+")
    res=num1+num2;
else if(opr === "-")
    res=num1-num2;
else if(opr === "*")
    res=num1*num2;
else if(opr === "/")
    res=num1/num2;
else
    alert("Wrong operator input!!!")
document.write(res);