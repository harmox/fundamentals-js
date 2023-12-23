function decryptingComands(arr) {
    let msg = arr.shift()
    let comand = arr.shift()
    while (comand != `Finish`) {
        comand = comand.split(' ')
        let action = comand.shift()

        if (action == `Replace`) {
            msg = msg.split(comand[0]).join(comand[1])
            console.log(msg)
        } else if (action == `Cut`) {
            let one = Number(comand[0])
            let two = Number(comand[1])
            if (msg[one] == undefined || msg[two] == undefined) {
                console.log(`Invalid indices!`)
            } else {
                msg = msg.slice(0, one) + msg.slice(two + 1)
                console.log(msg)
            }

        } else if (action == `Make`) {
            if (comand[0] == `Upper`) {
                msg = msg.toUpperCase()
                console.log(msg)
            } else {
                msg = msg.toLowerCase()
                console.log(msg)
            }
        } else if (action == `Check`) {
            if (msg.includes(comand[0])) {
                console.log(`Message contains ${comand[0]}`)
            } else {
                console.log(`Message doesn't contain ${comand[0]}`)
            }
        } else if (action == `Sum`) {
            let one = Number(comand[0])
            let two = Number(comand[1])
            if (one >= 0 && two < msg.length) {
                let sum = 0
                let toSum = msg.slice(one, two + 1)
                for (let char of toSum) {
                    let it = char.charCodeAt()
                    sum += it
                }
                console.log(sum)
            } else {
                console.log(`Invalid indices!`)
            }
        }

        comand = arr.shift()
    }


} decryptingComands(["HappyNameDay",
"Replace p r",
"Make Lower",
"Cut 2 23",
"Sum -2 2",
"Finish"])

