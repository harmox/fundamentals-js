function personInfo(firstName, lastName, age) {
    let person = {}
    person.firstName = firstName
    person.lastName = lastName
    person.age = age
    // let person={
    //     person.firstName=firstName
    // person.lastName=lastName
    // person.age=age
    // }
    return person;
} personInfo()
//--------------------------------------------------
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}
let myPerson = new Person(`Peter`, 21)
let myOtherPerson = new Person(`Stoyan`, 21)
//console.log(myOtherPerson, `\n`, myPerson)
//--------------------------------------------------
function city(city) {
    let keys = Object.keys(city)
    for (let key of keys) {
        console.log(key, `->`, city[key])
    }
} //city({name: "Plovdiv", area: 389,population: 1162358,  country: "Bulgaria", postCode: "4000"})
//-------------------------------------------------
function convertToObject(jsonstr) {
    let person = JSON.parse(jsonstr)
    let keys = Object.keys(person)
    for (let key of keys) {
        console.log(`${key}: ${person[key]}`)
    }
} //convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')
//--------------------------------------------------------
function convertToJSON(name, last, hair) {
    let persons = {
        name: name,
        lastName: last,
        hairColor: hair
    }
    console.log(JSON.stringify(persons))
} //convertToJSON('George', 'Jones', 'Brown')
//--------------------------------------------
function cats(cat) {
    for (let el of cat) {
        el = el.split(` `)
        let name = el[0]
        let age = Number(el[1])
        console.log(`${name}, age ${age} says Meow`)
    }
} //cats(['Mellow 2', 'Tom 5'])
//-------------------------------
function songs(arr) {
    let numberOfSongs = arr.shift()
    let typeNeeded = arr.pop()
    for (let i = 0; i < numberOfSongs; i++) {
        let [type, name, time] = arr[i].split('_')
        if (type == typeNeeded) {
            console.log(name)
        } else if (typeNeeded == `all`) {
            console.log(name)
        }
    }
} //songs([3, 'favourite_DownTown_3:14', 'favourite_Kiss_4:16', 'favourite_Smooth Criminal_4:01', 'all'])
//-----------------------------------------------------
function employees(arr) {
    for (let employeeName of arr) {
        let employee = { name: employeeName, personalNum: employeeName.length };
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNum}`)
    }
}// employees()
//---------------------------------------------------
function town(arr) {
    for (let town of arr) {
        let [townName, latitude, longitude] = town.split(' | ')
        latitude = Number(latitude).toFixed(2)
        longitude = Number(longitude).toFixed(2)

        let townObj = { town: townName, latitude: latitude, longitude: longitude }
        console.log(townObj)
    }
}
//------------------------------------------------
function foodSup(stock, orderedProducts) {
    let products = {}
    for (let i = 0; i < stock.length; i += 2) {
        let productName = stock[i]
        let qty = Number(stock[i + 1])
        products[productName] = qty
    }
    for (let i = 0; i < orderedProducts.length; i += 2) {
        let productName = orderedProducts[i]
        let qty = Number(orderedProducts[i + 1])
        if (productName in products) {
            //products.hasOwnProperty(productName)
            products[productName] += qty
        } else {
            products[productName] = qty
        }
    }
    let entries = Object.entries(products)
    for (let entry of entries) {
        console.log(`${entry[0]} -> ${entry[1]}`)
    }
}
//---------------------------------------------------
function moviess(arr) {
    let movies = []
    for (let comand of arr) {
        if (comand.includes(`addMovie`)) {
            let movieName = comand.split('addMovie ')[1]
            let movieObj = { name: movieName }
            movies.push(movieObj)
        } else if (comand.includes(`directedBy`)) {
            let [movieName, directorName] = comand.split(' directedBy ')
            let movie = movies.find(movie => movie.name == movieName)
            if (movie) {
                movie.director = directorName
            }
        } else if (comand.includes(`onDate`)) {
            let [movieName, date] = comand.split(' onDate ')
            let movie = movies.find(movie => movie.name == movieName)
            if (movie) {
                movie.date = date
            }
        }
    }
    for (let movie of movies) {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie))
        }
    }
}
//moviess(['addMovie The Avengers','addMovie Superman','The Avengers directedBy Anthony Russo','The Avengers onDate 30.07.2010',
// 'Captain America onDate 30.07.2010','Captain America directedBy Joe Russo'
// ])

class Vehicle {
    constructor(type, model, parts, fuel) {
        this.type = type
        this.model = model
        this.parts = parts
        this.parts.quality = parts.engine * parts.power
        this.fuel = fuel
    }
    drive(fuelLoss){
    this.fuel-=fuelLoss
    }
}

function inventory(arr) {
    let champs = []
    for (let i = 0; i < arr.length; i++) {
        let [name, level, items] = arr[i].split(' / ')
        level = Number(level)
        let hero = {
            name: name,
            level: level,
            items: items
        }
        champs.push(hero)
    }
    champs.sort((a, b) => a.level - b.level)
    champs.map(x => console.log(`Hero: ${x.name}\nlevel => ${x.level}\nitems => ${x.items}`))
} inventory()
//--------------------------------------------
function dictionary(input) {
    let dict = {};
    for (let element of input) {
        let obj = JSON.parse(element);
        dict = Object.assign(dict, obj);
    }
    let sortedKeys = Object.keys(dict);
    sortedKeys.sort((a, b) => a.localeCompare(b));
    for (let term of sortedKeys) {
        let definition = dict[term];
        console.log(`Term: ${term} => Definition: ${definition}`);
    }
}