function test(){
    let myAcc={
        balance:1500,
        holeder:`John`
    }
    let other=myAcc
    other.balance-=300
    console.log(myAcc.balance)
}test()