//https://regexlearn.com/learn/regex101
function matchFullName(input) {
    let patern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g
    let result = input.match(patern)
    console.log(result.join(' '))
}// matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan Ivanov")

function matchPhoneNumber([input]) {
    let patern = /\+359([ -])2\1\d{3}\1\d{4}/g;
    //\1 znachi pyrva referenciq ako pyrvo e space she tyrsi space kato moje da go naimenuvame kato zadacha matchDates
    let result = input.match(patern)
    console.log(result.join(', '))
} matchPhoneNumber(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222,+359-2-222-222, +359-2-222-22222 +359-2-222-2222'])

function matchDates([input]) {
    let pattern = /(?<day>\d{2})(?<sep>[-./])(?<month>[A-Z][a-z]{2})\k<sep>(?<year>\d{4})/g
    let match = pattern.exec(input)
    while (match != null) {
        let { day, month, year } = match.groups
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`)
        match = pattern.exec(input)
    }
} //matchDates(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973,1/Feb/2016'])