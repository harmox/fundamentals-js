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

function repeaingString(str,n){
    let stri=""
    for(let i=0;i<n;i++){
        stri+=str
    }
    return stri;
    console.log(stri)
}console.log(repeaingString(`abc`, 2 ))