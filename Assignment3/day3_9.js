const compInt = (p,r,n) => {
    var p = parseFloat(document.getElementById("pr").value);
    var r = parseFloat(document.getElementById("rate").value);
    var n = parseFloat(document.getElementById("period").value);
    var int=(p * (Math.pow(1 + (r/100),n)))-p;
    // int=Math.round(int);
    document.getElementById("comp").value = `${int.toFixed(2)}`;
}

// const validateData = (event) => {
//     var value= event.target.value;
//     if(isNaN(value)){
        
//     }
// }