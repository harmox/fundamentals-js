function echo (word){
    let type = typeof word
    console.log(typeof word)
    if(type===`string`||type===`number`){
        console.log(word)
    }else{console.log(`Parameter is not suitable for printing` )
}
}echo()
