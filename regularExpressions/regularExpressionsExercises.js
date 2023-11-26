function furniture(input) {
    let it = []
    let totalPrice = 0
    let comand = input.shift()
    let pattern = />>(?<name>[A-Z][A-Za-z]+)<<(?<price>\d+\.?\d*)!(?<qty>\d+)/
    while (comand != `Purchase`) {
        let match = comand.match(pattern)
        if (match) {
            let { name, price, qty } = match.groups;
            // let name =match.groups.name
            // let price=Number(match.groups.price);
            // let qty=Number(match.groups.qty)
            totalPrice += Number(qty) * Number(price)
            it.push(name)
        }
        comand = input.shift()
    }
    console.log(`Bought furniture:`)
    if (it.length > 0) {
        console.log(it.join('\n'))
    }
    console.log(`Total money spend: ${totalPrice.toFixed(2)}`)
}// furniture()

function race(input) {
    let names = input.shift().split(', ')
    let comand = input.shift()
    let result = {}
    names.forEach(name => result[name] = 0)
    let letterPatern = /[A-Za-z]/g
    let digitPatern = /\d/g
    while (comand != 'end of race') {

        let letternMatches = comand.match(letterPatern)
        let name = letternMatches.join('')
        let digitMathces = comand.match(digitPatern)
        let distance = digitMathces.map(Number).reduce((acc, val) => acc + val)
        if (name in result) {
            result[name] += distance
        }
        comand = input.shift()
    }
    let sortedResult = Object.entries(result).sort((a, b) => b[1] - a[1])
    console.log(`1st place: ${sortedResult[0][0]}`)
    console.log(`2nd place: ${sortedResult[1][0]}`)
    console.log(`3rd place: ${sortedResult[2][0]}`)
} //race()

function softuniBarIncome(input) {
    let income = 0
    let pattern = /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.0-9]*(?<price>\d+\.?\d*)\$/
    let comand = input.shift()

    while (comand != 'end of shift') {
        let match = comand.match(pattern)
        if (match) {
            let { customer, product, count, price } = match.groups
            let totalPrice = Number(count) * Number(price)
            console.log(`${customer}: ${product} - ${totalPrice.toFixed(2)}`)
            income += totalPrice
        }
        comand = input.shift()
    }
    console.log(`Total income: ${income.toFixed(2)}`)
} //softuniBarIncome()

function winningTicket(input) {
    const tickets = input.split(/,\s*/).map(t => t.trim());
    const output = [];

    tickets.forEach(ticket => {
        if (ticket.length !== 20) {
            output.push(`invalid ticket`);
            return;
        }

        const leftHalf = ticket.substring(0, 10);
        const rightHalf = ticket.substring(10);
        const regex = /(@{6,10}|#{6,10}|\${6,10}|\^{6,10})/;
        const leftMatch = leftHalf.match(regex);
        const rightMatch = rightHalf.match(regex);

        if (leftMatch && rightMatch && leftMatch[0][0] === rightMatch[0][0]) {
            const minLength = Math.min(leftMatch[0].length, rightMatch[0].length);
            const symbol = leftMatch[0][0];

            if (minLength === 10) {
                output.push(`ticket "${ticket}" - 10${symbol} Jackpot!`);
            } else {
                output.push(`ticket "${ticket}" - ${minLength}${symbol}`);
            }
        } else {
            output.push(`ticket "${ticket}" - no match`);
        }
    });

    return output.join('\n');
}//winningTicket(`$$$$$$$$$$$$$$$$$$$$, aabb , th@@@@@@eemo@@@@@@ey`)

