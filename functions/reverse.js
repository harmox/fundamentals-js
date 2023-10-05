function reverse(str) {
     reverseWord=``
    for (let i = str.length - 1; i >= 0; i-- ){

        reverseWord += str[i];
}
console.log (reverseWord)
}
reverse(`hello`);