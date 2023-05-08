const getWeekDay = (date) =>{
    var arr=date.toString().split(" ");
    document.write(`Today is ${arr[0]}`);
}
var y=prompt("Enter year(yyyy): ");
var m=prompt("Enter month(MM): ");
var d=prompt("Enter date(dd): ");
var date=new Date(y,m-1,d);
getWeekDay(date)