function reverseAndSort(words) {
    var reversedWords = words.map(function(word) {
        return word.split('').reverse().join('');
    });
    return reversedWords.sort();
}
var words = ["apple", "banana", "cherry", "date", "elderberry"];
var result = reverseAndSort(words);
alert(result); // ["ananab", "elppa", "gnirrets", "yrrebredle", "yrrehc"]