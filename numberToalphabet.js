function test(n) {
    buff=``
for(let i=0;i<n;i++){
    letter=String.fromCharCode(97+i);
    for(let b=0;b<n;b++){
        better=String.fromCharCode(97+b);
        for(let c=0;c<n;c++){
            cetter=String.fromCharCode(97+c);
            
            buff+=letter
            buff+=better
            buff+=cetter+`\n`
    
        }
    }
}
console.log(buff)
} test(2)