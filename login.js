function login (input) {
    let username = input[0];
    let pass = ``;
    let wrongAtempts=0
for (let i = username.length - 1; i >= 0; i-- ){
    pass += username[i]
  
}
let guess= input[1];
let index = 2;
while(guess!=pass){
    wrongAtempts++;
    if(wrongAtempts==4){
        console.log(`User ${username} blocked!`)
        return;
    }
    console.log(`Incorrect password. Try again.`)
    guess = input[index]
    index++
}

console.log(`User ${username} logged in.`)

}login([`Acer`,`login`,`go`])