function solve(arr) {
    let parking = {};
    for (let elem of arr) {
        let [garage, ...car] = elem.split(' - ');
        if (garage in parking) {
            parking[garage].push(...car)
            continue;
        }
        parking[garage] = car;
    }
    for (let entry of Object.entries(parking)) {
        console.log(`Garage № ${entry[0]}`)
        for (let elem of entry[1]) {
            console.log(`--- ${elem.replace(/\:/g, ' -')}`);
        }
    }
}
solve(['1 - color: blue, fuel type: diesel', '1 - color: red,manufacture: Audi', '2 - fuel type: petrol',
    '4 - color: dark blue, fueltype: diesel, manufacture: Fiat'])