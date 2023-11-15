function passwordGenerator(arr) {
    let [str1, str2, replaceStr] = arr
    let concatenated = str1 + str2
    let idx = 0
    for (let char of concatenated) {
        if (/[aeoui]/.test(char)) {
            concatenated = concatenated.replace(char, replaceStr[idx].toUpperCase())
            idx++
            if (idx == replaceStr.length) {
                idx = 0
            }
        }

    }
let password=concatenated.split('').reverse().join('')
console.log(`Your generated password is ${password}`)
} passwordGenerator(['ilovepizza','ihatevegetables','orange'])