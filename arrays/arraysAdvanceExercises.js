function train(arr) {
    let wagons = arr[0].split(` `).map(Number);
    let capacity = Number(arr[1]);
    for (let i = 2; i < arr.length; i++) {
        let command = arr[i]
        let tokens = command.split(` `)
        if (tokens[0] == `Add`) {
            let passangers = Number(tokens[1])
            wagons.push(passangers)
        } else {
            let passangers = Number(tokens[0])
            for (let index = 0; index < wagons.length; index++) {
                if (wagons[index] + passangers <= capacity) {
                    wagons[index] += passangers;
                    break;
                }
            }
        }
    }
    console.log(wagons.join(` `))
}

function distingArray(arr) {
    let unique = []
    for (let el of arr) {
        if (!unique.includes(el)) {
            unique.push(el)
        }
    } console.log(unique.join(` `))
} distingArray([1, 2, 3, 4])

function hauseParty(arr) {
    let guests = []

    for (let comand of arr) {
        let tokens = comand.split(` `)
        let name = tokens[0]
        if (tokens.includes(`not`)) {
            if (guests.includes(name)) {
                let index = guests.indexOf(name);
                guests.splice(index, 1)
            } else {
                console.log(`${name} is not in the list!`)
            }
        } else {
            if (guests.includes(name)) {
                console.log(`${name} is already in the list!`)

            } else {
                guests.push(name)
            }
        }
    } console.log(guests.join(`\n`))
} hauseParty([])

function sorting(num) {
    let sortedNum = num.sort((a, b) => a - b)
    let finalNums = [];

    while (sortedNum.length > 0) {
        let maxNum = sortedNum.pop()
        let minNum = sortedNum.shift()
        finalNums.push(maxNum, minNum)
    } console.log(finalNums.join(` `))
} sorting()

function sortedBy2Criteria(arr) {
    let sortedArr = arr.sort((a, b) => a.length - b.length || a.localeCompare(b))
    console.log(sortedArr.join`\n`)
}

function bombNumer(nums, bombInfo) {
    let [bombNum, power] = bombInfo
    while (nums.includes(bombNum)) {
        let idx = nums.indexOf(bombNum)
        nums.splice(Math.max(0,idx - power), power * 2 + 1, 0)
    }
    let sum = 0;
    for (let el of nums) {
        sum += el
    }
    console.log(sum)
}