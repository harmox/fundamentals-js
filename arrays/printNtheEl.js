function printNtheEl(arr){

let step=Number(arr[arr.length-1])

let buff=``
for(let i = 0; i < arr.length-1; i+=step){
buff+=arr[i]+` `
}
console.log(buff)
}printNtheEl(['5', '20', '31', '4', '20', '2'])
