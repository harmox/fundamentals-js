function test(arr, number) {

  for (let i = 0; i < arr.length; i++) {
    let firstNum = arr[i]
    for (let j = i + 1; j < arr.length; j++) {
      let secondNum = arr[j]
      let summ = firstNum + secondNum;
      let sum = [];
      if (summ == number) {
        sum.push(firstNum, secondNum)
        console.log(sum.join(` `))
      }
    }
  }
}
test([5, 15, 23, 56, 35], 10)
