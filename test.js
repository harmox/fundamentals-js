function test(char) {
    let code = char.charCodeAt();
    if (code >= 65 && code <= 90) {
        console.log(`upper-case`)
    } else {
        console.log(`lower-case`)
    }

    // if(char===char.toLowercase()){
    //     console.log(`lower-case`)
    // }else{
    //     console.log(`upper-case`)
    // }
} test('a', '5', '3')
