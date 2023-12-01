function paswordReset(arr) {
    let pass = arr.shift()
    let comand = arr.shift()
    while (comand != `Done`) {
        if (comand == `TakeOdd`) {
            let counter = 1
            let it = []
            for (let el of pass) {
                if (counter % 2 == 0) {
                    it.push(el)
                }
                counter++
            }
            pass = it.join('')
        } else {
            comand = comand.split(` `)
            let action = comand.shift()
            if (action == `Cut`) {
                let num1 = Number(comand[0])
                let num2 = Number(comand[1])
                pass = pass.slice(0, num1) + pass.slice(num1 + num2)
            } else if (action == `Substitute`) {
                if (pass.includes(comand[0])) {
                    pass = pass.split(comand[0]).join(comand[1])
                } else {
                    console.log(`Nothing to replace!`)
                    comand = arr.shift()
                    continue;
                }

            }
        }
        comand = arr.shift()
        console.log(pass)
    }
    console.log(`Your password is: ${pass}`)
} paswordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"])