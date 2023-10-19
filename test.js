function test(arr) {
    let loot = arr.shift().split(`|`)
    let comand = arr.shift()

    while (comand != `Yohoho!`) {
        let tokens = comand.split(` `)
        let action = tokens.shift()
        if (action == `Loot`) {
            tokens.filter(item => !loot.includes(item)).forEach(item => loot.unshift(item))

        } else if (action==`Drop`) {
            let idx = Number(tokens.shift())
            if (idx >= 0 && idx < loot.length) {
                let removedItem = loot.splice(idx, 1).shift()
                loot.push(removedItem)
            }
        } else if (action == `Steal`) {
            let count = Number(tokens.shift())
            let stolendItems = loot.splice(-count)
            console.log(stolendItems.join(', '))
        }
        comand = arr.shift()
    }

    if (loot.length == 0) {
        console.log(`Failed treasure hunt.`)
    } else {
        let totalGain = 0
        for (let item of loot) {
            totalGain += item.length
        }
        let average = totalGain / loot.length
// let totalGain=loot.reduce((acc, val)=>acc+val.length,0)
//let average=totalGain/loot.length
        console.log(`Average treasure gain: ${average.toFixed(2)} pirate credits.`)
    }
}
test([`Gold|Silver|Bronze|Medallion|Cup`,
    `Loot Wood Gold Coins`,
    `Loot Silver Pistol`,
   `Drop 3`,
    `Steal 3`,
    `Yohoho!`])
