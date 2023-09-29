function test(arr ) {
  let topNums=[];
for(let i=0;i<arr.length;i++){

  let num =arr[i]

  let isTop=true
  for(j=i+1;j<arr.length;j++){
    let rightNum=arr[j]
    if(rightNum>=num){
      isTop=false;
      break;
    }
  
  }
  if(isTop){
    topNums.push(num)
        }
}
console.log(topNums.join(` `))
}
test([5, 15, 23, 56 ,35],10)
