function secretChat(arr) {
    let word = arr.shift()
    let comand = arr.shift()
    while (comand != `Reveal`) {
        comand = comand.split(':|:')
 
        if (comand[0] == `InsertSpace`) {
            let num = Number(comand[1])
            word = word.slice(0, num,) + ' ' + word.slice(num)
            console.log(word)
        } else if (comand[0] == `Reverse`) {
            if(word.includes(comand[1])){
                let reverse = comand[1].split('').reverse().join('')
                let idx=word.indexOf(comand[1])
                let firsthalf=word.slice(0,idx)
                let secondhalf=word.slice(idx+comand[1].length)
                word=firsthalf+secondhalf+reverse
               // word = word.replace(comand[1], reverse)
                console.log(word)
                // не сменяме на място а го слагаме отзаде
            }else{
                console.log(`error`)
            }
 
        } else if (comand[0] == `ChangeAll`) {
            word = word.split(comand[1]).join(comand[2])
            console.log(word)
        }
        comand = arr.shift()
    }
    console.log(`You have a new text message: ${word}`)
}  secretChat(['xxxdcbaXXXxxxdcbaxxxdcba', 'Reverse:|:dcba', 'Reveal' ])
//[ 'xxxdcbaXXXxxxdcbaxxxdcba', 'Reverse:|:dcba', 'Reveal' ]