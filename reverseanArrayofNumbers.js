function test(n, nums) {
  //   let reversed=[]
  // for (let i=n-1;i>=0;i--){
  // reversed.push(nums[i])
  //}
  let result = nums.slice(0, n)
  let reversed = result.reverse()
  console.log(reversed.join(` `))
}
test(2, [1, 2, 3, 4])