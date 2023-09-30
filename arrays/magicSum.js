function magicSum(nums, sum) {

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (j == i) {
                continue;
            }
            if (nums[i] + nums[j] == sum) {
                console.log(`${nums[i]} ${nums[j]}`)
                delete nums[i]
                
            }
        }

    }
} magicSum([1, 7, 6, 2, 19, 23], 8)