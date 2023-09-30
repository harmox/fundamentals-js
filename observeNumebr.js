function test(num) {
    num = num.toString();
    let sum = 0;
    for (i = 0; i < num.length; i++) {
        sum += Number(num[i])
    }
    let result = sum.toString().includes(`9`);
    console.log(result ?
        `${num} Amazing? True` :
        `${num} Amazing? False`);
} test(1233)