function equelSum(arr) {
    let equel = false
    let linecounter = 0
    for (let i = 0; i < arr.length; i++) {
        let sumRight = 0;
        let sumLeft = 0;
        for (let v = arr.length-1; v > i; v--) {
            sumRight += arr[v]

        }
        for (let b = 0; b < i; b++) {
            sumLeft += arr[b]
        }
        if (sumLeft == sumRight) {
            equel = true
            break;
        }
        linecounter++

    }
    if (equel) {
        console.log(linecounter)
    } else {
        console.log(`no`)
    }
 

} equelSum([1, 2, 3, 3])