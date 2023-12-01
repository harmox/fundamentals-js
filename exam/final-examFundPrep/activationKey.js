function activationKey(arr){
let key=arr.shift()
let comand=arr.shift()
while(comand!=`Generate`){
comand=comand.split('>>>')
let action=comand.shift()
if(action==`Contains`){
if(key.includes(comand[0])){
console.log(`${key} contains ${comand[0]}`)
}else{
    console.log(`Substring not found!`)
}
}else if(action==`Flip`){
    let start=Number(comand[1])
    let end=Number(comand[2])
    let sliced=key.slice(start,end)
    if(comand[0]==`Upper`){
sliced=sliced.toUpperCase()
key=key.slice(0,start)+sliced+key.slice(end)
console.log(key)
    }else{
        sliced=sliced.toLowerCase()
        key=key.slice(0,start)+sliced+key.slice(end)
        console.log(key)
    }
}else{
    let start=Number(comand[0])
    let end=Number(comand[1])

    key=key.slice(0,start)+key.slice(end)
    console.log(key)
}
    comand=arr.shift()
}
console.log(`Your activation key is: ${key}`)

}activationKey(["abcdefghijklmnopqrstuvwxyz",
"Slice>>>2>>>6",
"Flip>>>Upper>>>3>>>14",
"Flip>>>Lower>>>5>>>7",
"Contains>>>def",
"Contains>>>def",
"Generate"])