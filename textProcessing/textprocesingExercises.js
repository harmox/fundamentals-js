function revealWords(words, sentence) {
    let word = words.split(', ')
    for (let char of word) {
        let needReplace = '*'.repeat(char.length)
        sentence = sentence.replace(needReplace, char)
    }
    console.log(sentence)
} //revealWords('great', 'softuni is ***** place for learning new programming languages')

function modernTimeOfHashTags(sentence) {
    let iterate = sentence.split(' ')
    let regex = /^[a-zA-Z]+$/
    for (let char of iterate) {
        if (char.length > 1 && char.startsWith('#')) {
            char = char.substring(1, 100)
            if (regex.test(char)) {
                console.log(char)
            }
        }
    }
}//modernTimeOfHashTags('Nowadays everyone uses # to tag a #special word in #socialMedia')

function extractFile(input) {
    let length = input.split('\\')
    let file = length[length.length - 1].split('.')
    if (file.length > 2) {
        let fileName = ''
        let extension = ''
        for (let i = 0; i < file.length; i++) {
            if (i == file.length - 1) {
                extension += file[i]
            } else {
                if (i == 0) {
                    fileName += file[i] + '.'

                } else {
                    fileName += file[i]
                }
            }
        }
        console.log(`File name: ${fileName}\nFile extension: ${extension}`)
    } else {
        let [fileName, extension] = file
        console.log(`File name: ${fileName}\nFile extension: ${extension}`)
    }
}//extractFile('C:\\Internal\\training-internal\\Template.me.pptx')

function stringSubstring(word, text) {
    for (let el of text.split(' ')) {
        el = el.toLowerCase()
        if (el == word) {
            console.log(el)
            return;
        }
    }
    console.log(`${word} not found!`)
} //stringSubstring('javascript', 'JavaScript is the bestprogramming language')

function replaceRepeatingChars(chars) {
    let str = ''
    for (let i = 0; i < chars.length; i++) {
        if (chars[i] == chars[i + 1]) {
            continue;
        } else {
            str += chars[i]
        }
    }
    console.log(str)
} //replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa')

function cutAndReverse(words) {
    let one = []
    for (let el of words) {
        one.unshift(el)
    }
    one = one.join('')
    let wordOne = one.substring(0, one.length / 2)
    let wordTwo = one.substring(one.length / 2, 100)
    console.log(wordTwo)
    console.log(wordOne)
}// cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')

function pascalCaseSplitter(text) {
    let str = ''
    for (let i = 0; i < text.length; i++) {
        if (/[A-Z]/.test(text[i]) && i > 0) {
            str += `, ${text[i]}`
        } else {
            str += text[i]
        }
    }
    console.log(str)
}//pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')