function smallestOfThree(n1, n2, n3) {
    let num = Math.min(n1, n2, n3)
    console.log(num)
}
`---------------------------------------------------`
function palindrom(arr) {
    for (let el of arr) {
        let reversedNum = el.toString().split(``).reverse().join(``);
        console.log(el == reversedNum);
    }
}
//palindrom = num => console.log(num.map(x => String(x) == String(x).split('').reverse().join('')).join('\n'))

function passwordValidator(pass) {
    let isValidLenght = passLength(pass);
    let isOnlyLetters = checkOnlyLetter(pass);
    let isMin2Digits = check2Diggits(pass);
    if (isValidLenght && isOnlyLetters && isMin2Digits) {
        console.log(`Password is valid`)
    }
    function passLength(pass) {
        if (pass.length >= 6 && pass.length <= 10) {
            return true;
        } else {
            console.log(`Password must be between 6 and 10 characters`)
        }
    }
    function checkOnlyLetter(pass) {
        for (let curr of pass) {
            let code = curr.charCodeAt(0);
            if (
                !((code >= 48 && code <= 57) ||
                    (code >= 65 && code <= 90) ||
                    (code >= 97 && code <= 122))
            ) {
                console.log("Password must consist only of letters and digits")
                return false;
            }
        }
        return true;
    }
    function check2Diggits(pass) {
        let digits = 0
        for (let curChar of pass) {
            let code = curChar.charCodeAt(0);
            if (code >= 48 && code <= 57) {
                digits++
            }
        }
        if (digits < 2) {
            console.log(`Password must have at least 2 digits`)
            return false;
        } else {
            return true;
        }
    }
}//passwordValidator(`Pa$s$s` )

function perfectNumber(num) {
    let sumProperDeviser = 0;
    for (let deviser = 1; deviser < num; deviser++) {
        if (num % deviser == 0) {
            sumProperDeviser += deviser
        }
    }
    if (sumProperDeviser == num) {
        console.log(`We have a perfect number!`)
    } else {
        console.log(`It's not so perfect.`)
    }
}//perfectNumber(6)

function factorialDivision(num1,num2){
let factorial1=calcFalctorial(num1)
let factorial2=calcFalctorial(num2)
let devided=factorial1/factorial2
console.log(devided.toFixed(2))

    function calcFalctorial(num){
        let factorial=1;
        while(num>1){
            factorial*=num
            num--
        }
        return factorial;
    }
}factorialDivision(6,2)

