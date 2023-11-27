function plantDiscovery(arr) {
    let num = Number(arr.shift())
    let plants = {}
    for (let i = 0; i < num; i++) {
        let [plant, rarity] = arr.shift().split('<->')
        plants[plant] = { rarity }
    }
    let comand = arr.shift()
    while (comand != `Exhibition`) {
        let [action, other] = comand.split(': ')
        let [plant, rating] = other.split(' - ')
        if (plants.hasOwnProperty(plant)) {

            if (action == `Rate`) {
                rating = Number(rating)

                if (plants[plant].count != undefined) {
                    plants[plant].count += 1
                    plants[plant].rating += rating
                } else {
                    plants[plant].rating = rating
                    plants[plant].count = 1
                }
            } else if (action == `Update`) {
                plants[plant].rarity = rating

            } else if (action == `Reset`) {
                plants[plant].rating = 0
            }
        } else {
            console.log(`error`)
        }
        comand = arr.shift()
    }

    console.log(`Plants for the exhibition:`)
    for (let plant in plants) {
        if (plants[plant].rating != undefined && plants[plant].rating != 0 &&plants[plant].rating!=null) {
            let averageRating = (plants[plant].rating / plants[plant].count).toFixed(2)
            console.log(`- ${plant}; Rarity: ${plants[plant].rarity}; Rating: ${averageRating}`)
        } else {
          //  plants[plant].rating = 0
            console.log(`- ${plant}; Rarity: ${plants[plant].rarity}; Rating: ${(plants[plant].rating).toFixed(2)}`)
        }
    }

} plantDiscovery(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"])