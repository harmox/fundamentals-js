function adAstra(arr) {
    let patern = /(?<start>[#|])(?<name>[A-Z][a-z]+\s*[A-Za-z]+)\k<start>(?<date>\d\d\/\d\d\/\d\d)\k<start>(?<calories>\d+)\k<start>/g;
    let totalcalories = 0
    let match = patern.exec(arr[0])

    while (match != null) {
        let { calories } = match.groups
        calories = Number(calories)
        totalcalories += calories
        match = patern.exec(arr[0])
    }
    totalcalories = totalcalories / 2000
    console.log(`You have food to last you for: ${Math.floor(totalcalories)} days!`)
    match = patern.exec(arr[0])
    while (match != null) {
        let { name, date, calories } = match.groups
        match = patern.exec(arr[0])
        console.log(`Item: ${name}, Best before: ${date}, Nutrition: ${calories}`)
    }

} adAstra([
    `$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|`
])