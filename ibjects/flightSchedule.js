function flightSchedule(arr) {
    let flights = {}
    let everyFlight = arr[0]
    for (let el of everyFlight) {
        let [id, destination] = el.split(' ')
        flights[id] = {
            Destination: destination,
            Status: `Ready to fly`
        }

    }
    arr[1].forEach(line => {
        let [numberFly, status] = line.split(' ');
        if (flights.hasOwnProperty(numberFly)) {
            flights[numberFly].Status = status;
        }
    });
    for (let fly in flights) {
        if (flights[fly].Status === String(arr[2])) {
            console.log(flights[fly])
        }
    }
} flightSchedule([['WN269 Delaware',

    'FL2269 Oregon',

    'WN498 Las Vegas',

    'WN3145 Ohio',

    'WN612 Alabama',

    'WN4010 New York',

    'WN1173 California',

    'DL2120 Texas',

    'KL5744 Illinois',

    'WN678 Pennsylvania'], ['DL2120 Cancelled', 'WN612 Cancelled', 'WN1173 Cancelled', 'SK430 Cancelled'], ['Cancelled']
])