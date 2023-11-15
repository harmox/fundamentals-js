function test(){
    let str1 = "GeeksforGeeks"; 
    let str2 = "Geeks123"; 
    
    let regex = /^[a-zA-Z]+$/; 
    
    console.log(regex.test(str1)); 
    console.log(regex.test(str2));
    
}test()