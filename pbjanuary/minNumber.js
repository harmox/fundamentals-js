function mminNumber (input){
    let index = 0 ;
    let command = input[index]
    index++;
    let myminNumber=Number.MAX_SAFE_INTEGER;
    while(command !=="Stop"){
    let num = Number(command);
    if (myminNumber>num){
        myminNumber=num 
    } 
    command=input[index]
    index++
    }
    console.log(myminNumber)
    }mminNumber(["100","99","80","70","Stop"])