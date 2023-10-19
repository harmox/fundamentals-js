function carWash(comands) {
    let percent = 0;
    for (let el of comands) {
        switch (el) {
            case `soap`: percent += 10; break;
            case `water`: percent *= 1.20; break;
            case `vacuum cleaner`: percent *= 1.25; break;
            case `mud`: percent *= 0.90; break;
        }
    } console.log(`The car is ${percent.toFixed(2)}% clean.`)
}

function numberMod(num) {
    num = num.toString()
    let sum = 0
    while (sum <= 5) {
        sum = 0
        for (let i = 0; i < num.length; i++) {
            let numNum = Number(num[i])
            sum += numNum
        }
        sum = sum / num.length
        if (sum >= 5) { break }
        num += `9`
    }
    console.log(num)
} //numberMod(101)

function dnaPrint(number) {
    let str = "ATCGTTAGGG";
    let counter = 0;
    for (let i = 0; i < number; i++) {
        if (i % 4 == 0) {
            console.log(`**${str[counter % 10]}${str[(counter % 10) + 1]}**`);
        } else if (i % 4 == 1) {
            console.log(`*${str[counter % 10]}--${str[(counter % 10) + 1]}*`);
        } else if (i % 4 == 2) {
            console.log(`${str[counter % 10]}----${str[(counter % 10) + 1]}`);
        } else if (i % 4 == 3) {
            console.log(`*${str[counter % 10]}--${str[(counter % 10) + 1]}*`);
        }
        counter += 2;
    }
}