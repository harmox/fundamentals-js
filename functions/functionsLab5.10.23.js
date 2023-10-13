function power(n, exponent) {
    let product = 1;
    for (let i = 0; i < exponent; i++) {
        product *= n
    }
    console.log(product)
    Math.pow(n, exponent)
    console.log(Math.pow(n, exponent))
}//power(2,8)

function recursivePower(n, exponent) {
    if (exponent == 0) {
        return 1;

    } else {
        return n * recursivePower(n, exponent - 1)
    }
}//console.log(recursivePower(2,8))

function formatGrade(grade) {
    if (grade < 3) {
        console.log(`Fail (2)`)
    } else if (grade < 3.50) {
        console.log(`Poor (${grade.toFixed(2)})`)
    } else if (grade < 4.50) {
        console.log(`Good (${grade.toFixed(2)})`)
    } else if (grade < 5.50) {
        console.log(`Very good (${grade.toFixed(2)})`)
    } else {
        console.log(`Excellent (${grade.toFixed(2)})`)
    }
} //formatGrade(6)

function repeaingString(str, n) {
    let stri = ""
    for (let i = 0; i < n; i++) {
        stri += str
    }
    return stri;
}//console.log(repeaingString(`abc`, 2 ))
function repeating(str, n) {
    let result = str.repeat(n)
    console.log(result)
}
//coffee - 1.50
//water - 1.00
//coke - 1.40
//snacks - 2.00
function orders(product, n) {
    let price = 0
    switch (product) {
        case `coffee`: price = 1.50 * n; break;
        case `water`: price = 1.00 * n; break;
        case `coke`: price = 1.40 * n; break;
        case `snacks`: price = 2 * n; break;
    }
    console.log(price.toFixed(2))
}

function calculator(num1, num2, operator) {
    let obj = {
        "multiply": (a, b) => a * b,
        "add": (a, b) => a + b,
        "divide": (a, b) => a / b,
        "subtract": (a, b) => a - b,
    }
    return obj[operator](num1, num2)
}//console.log(calculator(5,5,`divide`))

function signCheck(num1, num2, num3) {
    let num = 0
    if (num1 < 0) { num++ }
    if (num2 < 0) { num++ }
    if (num3 < 0) { num++ }
    if (num % 2 == 0) { console.log(`Positive`) }
    else { console.log(`Negative`) }
}