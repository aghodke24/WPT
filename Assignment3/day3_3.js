var num=parseInt(prompt("Enter a number: "));
var str="";
var i=1
while(i<num){
    if(i%2 == 0){
        str += i + "<br> "
    }
    i++;
}
document.write(str);