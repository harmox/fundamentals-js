function travelTime(arr) {
    let obj = {}

    for (let destination of arr) {
        let [country, city, price] = destination.split(' > ')
        price = Number(price)
        if (!obj.hasOwnProperty(country)) {
            obj[country] = {}
        }
        if (!obj[country].hasOwnProperty(city)) {
            obj[country][city] = price;
        } else {
            if (obj[country][city] > price) {
                obj[country][city] = price
            }
        }
    }
    let sortedCountries = Object.keys(obj).sort((a, b) => a.localeCompare(b));

    for (let country of sortedCountries) {
        let sortedTowns = Object.entries(obj[country])
            .sort((a, b) => a[1] - b[1] || a[0].localeCompare(b[0]))
            .map(([town, cost]) => `${town} -> ${cost}`)
            .join(' ');
        console.log(`${country} -> ${sortedTowns}`)
    }
}
travelTime(["Bulgaria > Sofia > 500", "Bulgaria > Sopot > 800", "France > Paris > 2000",
    "Albania > Tirana > 1000", "Bulgaria > Sofia > 200"
])