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