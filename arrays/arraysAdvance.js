function sumFirstAndLast(arr){
let num1=arr.shift()
let num2=arr.pop()
console.log(Number(num1)+Number(num2))
}//sumFirstAndLast(['20', '30', '40'])

function negativeOrPositive(arr){
    let newArr=[]
    for(let el of arr){
        if (el>=0){
newArr.push(el)
        }else{newArr.unshift(el)}
    }console.log(newArr.join`\n`)
}//negativeOrPositive(['3', '-2', '0', '-1'])

function firstKLastK(arr){
    let k=arr.shift()
console.log(arr.slice(0,k).join(` `))
console.log(arr.slice(-k).join(` `))
}//firstKLastK([2,7, 8, 9])

function lastKNumbersSequence(n,k){
let arr=[1]
while(n>arr.length){
    let sum=0
    let kArr=arr.slice(-k)
    for(let i=0;i<kArr. length;i++){
sum+=kArr[i]
    }
    arr.push(sum)
}console.log(arr.join(` `))
}//lastKNumbersSequence(6,3)

function processOddNumbers (arr){
    //return arr.filter((el,index)=>index%2!==0).map(x=>x*2).reverse().join(` `) ;
let newArr=[]
for(let i=0;i<arr.length;i++){
if(i%2!==0){
    newArr.push(arr[i])
}
}console.log(newArr.map((x=>x*2)).reverse().join` `)
}//processOddNumbers([3, 0, 10, 4, 7, 3])

function smallestTwoNumbers(arr){
console.log(arr.sort((a,b)=>a-b).splice(0,2).join(` `))
}//smallestTwoNumbers([30,15,5,50])

function listOfProducts(arr){
let newArr=arr.sort();
for(let i=0;i<newArr.length;i++){
    console.log(`${i+1}.${newArr[i]}`)
}}