function arrayManipolator(nums, comands) {
    for (let comand of comands) {
        let tokens = comand.split(` `)
        let action = tokens[0]
        if (action == `add`) {
            let idx = Number(tokens[1])
            let num = Number(tokens[2])
            nums.splice(idx, 0, num)
        } else if (action == `addMany`) {
            let idx = Number(tokens[1])
            let numsToAdd = tokens.slice(2,).map(Number)
            for (let num of numsToAdd) {
                nums.splice(idx, 0, num)
                idx++
            }
        } else if (action == `contains`) {
            let num = Number(tokens[1])
            let idx = nums.indexOf(num)
            console.log(idx)
        } else if (action == `remove`) {
            let idx = Number(tokens[1])
            nums.splice(idx, 1)
        } else if (action == `shift`) {
            let rotations = Number(tokens[1])
            for (let rotation = 1; rotation <= rotations; rotation++) {
                let firstNum = nums.shift()
                nums.push(firstNum)
            }
        } else if (action == `sumPairs`) {
            let pairedArr = []
            for (let i = 0; i < nums.length; i += 2) {
                if (i + 1 < nums.length) {
                    pairedArr.push(nums[i] + nums[i + 1])
                } else {
                    pairedArr.push(nums[i])
                }
            }
            nums = pairedArr
        } else if (action == `print`) {
            console.log(`[ ${nums.join(`, `)} ]`)
        }
    }
}