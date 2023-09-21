function test(str,char,result) {
    let res=str.replace(`_`,char)
    let output=res===result? "Matched" : "Not Matched";
    console.log(`${output}`)
}test('Str_ng', 'I','StrIng')