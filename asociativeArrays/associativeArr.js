function phoneBook(arr) {
    let phone = {}
    for (let tu of arr) {
        let [key, value] = tu.split(' ')
        phone[key] = value
    }
    console.log(Object.entries(phone).map(entry => entry.join` -> `).join('\n'))
}//phoneBook()

function meeting(arr) {
    let meetSchedule = {}
    for (let text of arr) {
        let [key, value] = text.split(' ')
        if (meetSchedule.hasOwnProperty(key)) {
            console.log(`Conflict on ${key}!`)
            continue;
        } else {
            console.log(`Scheduled for ${key}`)
        }
        meetSchedule[key] = value
    }
    console.log(Object.entries(meetSchedule).map(entry => entry.join` -> `).join('\n'))
} //meeting()

function adresBook(arr) {
    let adreses = {}
    for (let step of arr) {
        let [name, adres] = step.split(':')
        adreses[name] = adres
    }
    let sorted = Object.entries(adreses).sort((a, b) => a[0].localeCompare(b[0]))
    let soretedstr = Object.fromEntries(sorted)
    console.log(Object.entries(soretedstr).map(entry => entry.join` -> `).join('\n'))
}//adresBook()

function storage(arr) {
    let map = new Map()
    for (let productAndQ of arr) {
        let [product, quantity] = productAndQ.split(' ')
        quantity = Number(quantity)
        if (!map.has(product)) {
            map.set(product, quantity)
        } else {
            let newq = map.get(product) + quantity
            map.set(product, newq)
        }
    }
    for (let kvp of map) {
        console.log(`${kvp[0]} -> ${kvp[1]}`)
    }
} //storage()

function schoolGrades(arr) {
    let student = {}
    let sum = 0

    for (const line of arr) {
        let [name, ...grade] = line.split(' ')

        if (student.hasOwnProperty(name)) {
            student[name].push(...grade)
        } else {
            student[name] = grade
        }

    }
    studentToArr = Object.entries(student)
    studentToArr.sort((a, b) => a[0].localeCompare(b[0]))
    let sortedStuden = Object.fromEntries(studentToArr)


    for (const final in sortedStuden) {

        for (let i = 0; i < sortedStuden[final].length; i++) {
            sum += Number(sortedStuden[final][i])
        }
        let averageSum = (sum / sortedStuden[final].length).toFixed(2)
        console.log(`${final}: ${averageSum}`);
        sum = 0
    }
}//schoolGrades()

function wordOccurance(arr) {
    let words = {}
    for (let word of arr) {
        words[word] = 0
    }
    for (let word of arr) {
        words[word]++
    }
    let sorted = Object.entries(words).sort((a, b) => b[1] - a[1])
    let sortedWords = Object.fromEntries(sorted)
    console.log(Object.entries(sortedWords).map(entry => entry.join(' -> ') + ' times').join('\n'))
}//wordOccurance()