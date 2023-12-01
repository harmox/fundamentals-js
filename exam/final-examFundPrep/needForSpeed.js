function needForSpeed(arr) {
    let n = Number(arr.shift())
    let car = {}

    for (let i = 0; i < n; i++) {
        let [brand, mileage, fuelAvaible] = arr.shift().split('|')
        mileage = Number(mileage)
        fuelAvaible = Number(fuelAvaible)
        car[brand] = { mileage, fuelAvaible }
    }
    let comand = arr.shift()
    while (comand != `Stop`) {
        comand = comand.split(' : ')
        let action = comand.shift()
        let brand = comand.shift()
        if (action == `Drive`) {
            let distance = Number(comand[0])
            let fuel = Number(comand[1])

            if (car[brand].fuelAvaible < fuel) {
                console.log(`Not enough fuel to make that ride`)
            } else {
                car[brand].mileage += distance
                car[brand].fuelAvaible -= fuel
                console.log(`${brand} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`)
            }
            if (car[brand].mileage >= 100000) {
                console.log(`Time to sell the ${brand}!`)
               delete car[brand]
            }
        } else if (action == `Refuel`) {
            let refuel = Number(comand[0])

            if (refuel + car[brand].fuelAvaible > 75) {
                refuel = 75 - car[brand].fuelAvaible
            }
            car[brand].fuelAvaible += refuel
            console.log(`${brand} refueled with ${refuel} liters`)
        } else if (action == `Revert`) {
            let decrease = Number(comand[0])
            car[brand].mileage -= decrease
            if (car[brand].mileage >= 10000) {
                console.log(`${brand} mileage decreased by ${decrease} kilometers`)

            } else {
                car[brand].mileage = 10000
            }
        }

        comand = arr.shift()
    }
    for (let el in car) {
        console.log(`${el} -> Mileage: ${car[el].mileage} kms, Fuel in the tank: ${car[el].fuelAvaible} lt.`)
    }

} needForSpeed([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
  ])