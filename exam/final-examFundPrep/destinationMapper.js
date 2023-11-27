function destinationMapper(str) {
    let patern = /([=\/])[A-Z][A-Za-z]{2,}\1/g
    let matches = str.match(patern)
    let sum = 0;
    let m = []
    if (!matches) {
        console.log(`Destinations: ${m.join(', ')}`)
        console.log(`Travel Points: ${sum}`)
        return;
    }
    for (let el of matches) {
        el = el.slice(1, el.length - 1)
        sum += el.length
        m.push(el)
    }

    console.log(`Destinations: ${m.join(', ')}`)
    console.log(`Travel Points: ${sum}`)

} destinationMapper("ThisIs some InvalidInput")