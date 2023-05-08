var num1= parseInt(prompt("Enter a number for calculating table: "));
var str="";
for(var i=1;i<=10;i++){
    str+=`${num1} x ${i} = `+i*num1 + "<br>";
}
document.write(str);