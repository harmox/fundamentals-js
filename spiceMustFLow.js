function spiceMustFLow(currentYield){
    let spice=0;
    let day=0;

    while(currentYield>=100){
        day++
        spice+=currentYield-26
        currentYield-=10
    }
    
    if(spice>=26){
        spice-=26
    }
    console.log(day)
    console.log(spice)

}spiceMustFLow(111);