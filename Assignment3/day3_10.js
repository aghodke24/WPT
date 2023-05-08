var dt = new Date();
// var day = date.getDay();
// var dates = date.getDate();
// console.log(date);
// var year = date.getFullYear();

var date=(dt.toString());

var arr=date.split(" ");
console.log(arr);
var time=arr[4].split(":");
console.log(time);
var str="";
var hr=time[0];
if(hr<6){
    str+="Good Night!!!"
    // if(hr==6){
    //     if(time[1]>=0 || time[2]>=0){
    //         str+="Good Morning";
    //     }

    // }
}
else if (hr>= 6 && hr < 12){
    str+="Good Morning!!!";
}
else if(hr>=12 && hr < 18){
    str+="Good Afternoon!!!";
}
else{
    str+="Good Evening"
}
var d=new Date(arr[3],11,31);
var days=Math.floor((d-dt)/84600000);
document.write(`Today is ${arr[0]}, ${arr[2]} ${arr[1]} ${arr[3]}, Welcome, ${str} ${days} Days remaining for end of the year.`)