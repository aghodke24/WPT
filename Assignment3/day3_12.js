var arr=[];
var nm="";
for(i=0;i<6;i++){
    nm=prompt(`Enter name ${i}`);
    // console.log(typeof(nm));
    arr.push(nm);
}
arr.sort();
document.write(arr);