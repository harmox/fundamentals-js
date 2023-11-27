function mirrorWords(arr) {
    let patern = /(?<i>[#@])[A-Za-z]{3,}\k<i>\k<i>[A-Za-z]{3,}\k<i>/g
    let count = 0;
    let match = arr[0].match(patern)
    let matches = 0
    if (match) {
        matches = match.length
    } else {
        console.log("No word pairs found!")
        console.log("No mirror words!")
        return;
    }
    let mirors = []
    for (let el of match) {
        let tokens = null
        if (el.includes('@')) {
            tokens = el.split('@')
        } else if (el.includes('#')) {
            tokens = el.split('#')
        }

        let one = tokens[1]
        let two = tokens[3]
        let twoReversed = two.split('').reverse().join('')

        if (one == twoReversed) {
            count++
            mirors.push(`${one} <=> ${two}`)
        }
    }

    if (match.length > 0) {
        console.log(`${matches} word pairs found!`)
        if (count > 0) {
            console.log(`The mirror words are:`)
            console.log(mirors.join(', '))
        } else {
            console.log("No mirror words!")
        }
    } else {
        console.log("No word pairs found!")
        console.log("No mirror words!")
    }
} mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
    ]
    
)