function test2(arr) {
let cofees=arr.shift().split(' ')
let comandsCount=arr.shift()
for(let i=0;i<comandsCount;i++){
let comand=arr.shift().split(' ')
if(comand[0]==`Include`){
cofees.push(comand[1])

}else if(comand[0]==`Remove`){
    let num=Number(comand[2])
if(num>=cofees.length){
    continue;
}else{
    if(comand[1]==`first`){
        for(let j=0;j<num;j++){
            cofees.shift()
        }

        
    }else if(comand[1]==`last`){
        for(let j=0;j<num;j++){
            cofees.pop()
        }
    }
}

}else if(comand[0]==`Prefer`){
    let idx1=comand[1]
    let idx2=comand[2]
    if(cofees.hasOwnProperty(idx1)&&cofees.hasOwnProperty(idx2)){
        let change1=cofees[idx1]
        cofees[idx1]=cofees[idx2]
        cofees[idx2]=change1
    }else{continue;}
}else if (comand[0]==`Reverse`){
    cofees.reverse()
}
}
console.log(`Coffees:
${cofees.join(` `)}`)
}
test2(["Arabica Liberica Charrieriana Magnistipula Robusta BulkCoffee StrongCoffee", "5",
 "Include TurkishCoffee", "Remove first 2", "Remove last 1", "Prefer 3 1", "Reverse"])