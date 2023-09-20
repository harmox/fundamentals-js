function bitcoin(input) {
    let index = 0;
    let counterDay = 0;
    let sumOfGoldinGrams = 0;
    let moneySum = 0;
    let dayFirstBought = 0;
    let it = false;
    let bitcoinBought = 0;
    let moneyLeft = 0;
    for (let i = 0; i <= input.length - 1; i++) {
        let currGold = input[i];
        goldInMoney = 0;
        counterDay++
        if (counterDay%3==0) {
            currGold = currGold * 0.7
            
        }
        sumOfGoldinGrams += currGold
        goldInMoney = currGold * 67.51;
        moneySum += goldInMoney;
        if (goldInMoney >= 11949.16) {
            if (it) {
                continue;
            }
            dayFirstBought = i + 1;
            it = true
        }
    }
    bitcoinBought =moneySum / 11949.16
    bitcoinBought=Math.floor(bitcoinBought)
    moneyLeft = (moneySum - (bitcoinBought * 11949.16)).toFixed(2)
    console.log(`Bought bitcoins: ${bitcoinBought}`);
    if (it) {
        console.log(`Day of the first purchased bitcoin: ${dayFirstBought}`)
    }
    console.log(`Left money: ${moneyLeft} lv.`)
} bitcoin([3124.15,504.212,2511.124])