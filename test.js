function softuni(input) {
    let change = Number(input[0])
    let coins = Math.round(change * 100)
    let totalCoinsCounter = 0;
    while (coins > 0) {
        if (coins >= 200) {
            totalCoinsCounter++
            coins -= 200
        } else if (coins >= 100) {
            totalCoinsCounter++
            coins -= 100
        } else if (coins >= 50) {
            totalCoinsCounter++
            coins -= 50
        } else if (coins >= 20) {
            totalCoinsCounter++
            coins -= 20
        } else if (coins >= 10) {
            totalCoinsCounter++
            coins -= 10
        } else if (coins >= 5) {
            totalCoinsCounter++
            coins -= 5
        }
        else if (coins >= 2) {
            totalCoinsCounter++
            coins -= 2
        } else if (coins >= 1) {
            totalCoinsCounter++
            coins -= 1
        }

    }
    console.log(totalCoinsCounter);

} softuni(["0.59"])
