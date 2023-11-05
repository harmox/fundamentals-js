function picolo(arr) {
    let cars = {}
    for (let ar of arr) {
        let [comand, number] = ar.split(', ')
        if (comand == `IN`) {
            cars[number] = null
        }
        if (comand == `OUT`) {
            delete cars[number]
        }
    }
    let sorted = Object.entries(cars).sort((a, b) =>a[0].localeCompare(b[0])|| b[2] - a[2] || b[3] - a[3] || b[4] - a[4] || b[5] - a[5])
    if (Object.keys(cars).length == 0) {
        console.log(`Parking Lot is Empty`)
    } else {
        for (let [key, value] of sorted) {
            console.log(key)
        }
    }
} picolo(['IN, CA2844AA','IN, CA1234TA','OUT, CA2844AA','IN, CA9999TT',
'IN, CA2866HI','OUT, CA1234TA','IN, CA2844AA', 'OUT, CA2866HI', 'IN, CA9876HH','IN, CA2822UU'])
    // function picolo(arr){
    //     const mySet=new Set()
    //         for(let car of arr){
    //             let [comand,number]=car.split(', ')
        
    //             if(comand==`IN`){
    //                 mySet.add(number)
    //             }else if(comand==`OUT`){
    //                 mySet.delete(number)
    //             } 
    //         }
    //         const sortedArray = Array.from(mySet).sort((a, b) =>a[0].localeCompare(b[0])|| a[2] - b[2]||a[3]-b[3]||a[4]-b[4]);
    //         if(mySet.size<=0){console.log(`Parking Lot is Empty`)
    //     }else{
    //         sortedArray.forEach((value)=>console.log(value))
    //     }
    //     }