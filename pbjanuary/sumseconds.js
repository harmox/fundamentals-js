function sumseoncds (input){
    let firsttime =  Number (input[0])
    let secondstime = Number (input[1])
    let thirdtime = Number ( input[2])
let totaltime=firsttime+secondstime+thirdtime
let minutes = Math.floor(totaltime/60)
let seconds = totaltime % 60;
if (seconds<10){
    console.log(`${minutes}:0${seconds}`)
}else {
    console.log(`${minutes}:${seconds}`)
}


}sumseoncds(["50", "50", "49"])