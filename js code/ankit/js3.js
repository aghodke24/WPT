function listEvenNumbers(n) {
    var i = 0;
    while (i <= n) {
        if (i % 2 === 0) {
            console.log(i);
            alert(i)
        }
        i++;
    }
}

var n = parseInt(prompt("Enter a number: "));
listEvenNumbers(n);
alert(n)