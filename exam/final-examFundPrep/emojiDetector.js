function emojiDetector([arr]) {
    let patern = /(:{2}|\*{2})(?<values>[A-Z][a-z]{2,})(\1)/g
    let digitsMatch = arr.match(/[0-9]+/g)
    let threshhold = 1
    for (let el of digitsMatch) {
        for (let su of el) {
            threshhold *= su
        }
    }
    console.log(`Cool threshold: ${threshhold}`)
    let emojiarr=[]
    let emoji = arr.match(patern)
    let sum = 0
let counter=0
if(emoji!=null){
    for (let el of emoji) {
        let it = el.slice(2, el.length - 2)
        for (let ol of it) {
            sum += ol.charCodeAt()
        }
        if (sum > threshhold) {
            emojiarr.push(el)
            counter++
        }
        sum = 0
    }
    console.log(`${emoji.length} emojis found in the text. The cool ones are:`);
    emojiarr.forEach(el=>console.log(`${el}`))
}

} emojiDetector(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."])