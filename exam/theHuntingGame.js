function test1(arr) {
    let days = Number(arr.shift())
    let players = Number(arr.shift())
    let groupEnergy = Number(arr.shift())
    let water = Number(arr.shift()) * players * days
    let food = Number(arr.shift()) * players * days
    caunt = 1;
    for (let i = 0; i < arr.length; i++) {
        let enrgyLoss = Number(arr[i])
        groupEnergy -= enrgyLoss
        if (groupEnergy <= 0) { break; }
        if (caunt % 2 == 0) {
            water *= 0.7
            groupEnergy *= 1.05
        }
        if (caunt % 3 == 0) {
            food = food - (food / players)
            groupEnergy *= 1.1
        }
        caunt++
    }
    if (groupEnergy <= 0) {
        console.log(`You will run out of energy. You will be left with ${food.toFixed(2)} food and ${water.toFixed(2)} water.`)
    } else {
        console.log(`You are ready for the quest. You will be left with - ${groupEnergy.toFixed(2)} energy!`)
    }
}