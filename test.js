function test(n,x){
    let a = n+dec(x)

    console.log(a)
}
test(1,3)
function dec(num){
    
    let sum=0
    for(let i=num;i>0;i--){
        sum+=i
    }
    console.log(sum)
    return sum;
}