function rotateElements(arr) {
    let rotationsCounter = Number(arr[arr.length - 1])
    arr.pop()
    for (let i = 0; i < rotationsCounter; i++) {
       
        
        let current = arr.pop();
        arr.unshift(current);

    }
    console.log(arr.join(` `))
} rotateElements(['Banana', 'Orange', 'Coconut','Apple', '15'])