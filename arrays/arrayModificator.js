function test(arr) {
    let nums = arr.shift()
    nums = nums.split(` `).map(Number)
    for (let el of arr) {
      let comand = el.split(` `)
      let num1 = Number(comand[1])
      let num2 = Number(comand[2])
      if (comand == `end`) { break; }
      if (comand[0] == `swap`) {
        //[nums[num1], nums[num2]] = [nums[num2], nums[num1]];
        let temp = nums[num1]
        nums[num1] = nums[num2]
        nums[num2] = temp
      } else if (comand[0] == `multiply`) {
        let multiplied = nums[num1] * nums[num2]
        nums.splice(num1, 1, multiplied)
  
      } else if (comand[0] == `decrease`) {
        nums = nums.map((x) => x - 1)
      }
    }
    console.log(nums.join(`, `))
  }
  test([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
  ])
  