function bossRush(arr) {
    let num = Number(arr.shift())
    let pattern = /\|(?<name>[A-Z]{4,})\|:#(?<title>[A-Za-z]+\s[A-Za-z]+)#/
    for (let i = 0; i < num; i++) {
        if (pattern.test(arr[i])) {
            let match = arr[i].match(pattern)
            let { name, title } = match.groups
            console.log(`${name}, The ${title}`)
            console.log(`>> Strength: ${name.length}`)
            console.log(`>> Armor: ${title.length}`)

        } else {
            console.log(`Access denied!`)
        }
    }


} bossRush(['3',
    '|STEFAN|:#H1gh Overseer#',
    '|IVAN|:#Master detective#',
    '|KARL|: #Marketing lead#'])