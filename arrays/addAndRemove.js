function addAndRemove(arr) {
    let num = 1
    let newArr = []
    for (let el of arr) {
        if (el == `add`) {
            newArr.push(num)
        } else {
            newArr.pop()
        }
        num++
    }
if(newArr.length>0){
    console.log(newArr.join(` `))
}else{
    
    console.log(`Empty`)
}

} addAndRemove(['add', 'add', 'add', 'add'])