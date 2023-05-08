while(true){
    var num=(prompt("Enter five digit num: "));
    if(num.length === 5 ){
       
        var num1=parseInt(num);
        var rev=0
        var rem=0
        while(num1 > 0){
            
            rem=num1%10;
            rev=rev+rem;
            num1=Math.floor(num1/10);
        }
        document.write(rev);
        break;

    }
    
}
    
