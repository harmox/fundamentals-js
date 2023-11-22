function test3(arr, entryPoint, input) {
    //if right =left print left
    //arr.split(', ')
    let left = 0
    let right = 0


    for (let i = entryPoint + 1; i <=arr.length; i++) {
        let num = arr[entryPoint]
        if (input == `cheap`) {
            if (num > arr[i]) {
                right += arr[i]
            }
        } else if (input == `expensive`) {
            if (num <= arr[i]) {
                right += arr[i]
            }
        }
    }
    for (let j = 0; j < entryPoint; j++) {
        let num = arr[entryPoint]
        if (input == `cheap`) {
            if (num > arr[j]) {
                left += arr[j]
            }
        } else if (input == `expensive`) {
            if (num <= arr[j]) {
                left += arr[j]
            }
        }
    }
    if(left>=right ){
        console.log(`Left - ${left}`)
    }else if (right>left){
        console.log(`Right - ${right}`);
    }
} test3([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3],

    7,
    
    "expensive")