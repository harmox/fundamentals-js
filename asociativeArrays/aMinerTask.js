function aMinerTask(arr){
    let typeOfMaterials={}
for(let i=0;i<arr.length;i+=2){
    let type=arr[i]
    let qty=Number(arr[i+1])
if(type in typeOfMaterials){
    typeOfMaterials[type]+=qty
}else{
    typeOfMaterials[type]=qty
}
}
console.log(Object.entries(typeOfMaterials).map(entry=>entry.join(` -> `)).join(`\n`))
}aMinerTask([ 'gold', '155', 'silver', '10', 'copper', '17', 'gold', '15' ])