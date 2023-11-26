function theImitationGame(arr) {
    let msg = arr.shift()
    let comand = arr.shift()
    while (comand != `Decode`) {
        comand = comand.split('|')
        if (comand[0] == `Move`) {
            let num = Number(comand[1])
            let it = ''
            msg = msg.substr(num) + msg.substr(0, num)

        } else if (comand[0] == `Insert`) {
            let num = Number(comand[1])

            msg = msg.slice(0, num) + comand[2] + msg.slice(num)
        } else if (comand[0] == `ChangeAll`) {
            msg = msg.split(comand[1]).join(comand[2])
        }


        comand = arr.shift()
    }

    console.log(`The decrypted message is: ${msg}`)

} theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
])