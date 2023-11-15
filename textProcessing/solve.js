function solve1(str){
    for(let a of str){
        console.log(a)
    }
}//solve1()

function Substring(str,start,end){
let newend=start+end

console.log(str.substring(start,newend))

}//Substring('ASentence', 1, 8)

function censoredWord(sentence,word){

console.log(sentence.split(word).join('*'.repeat(word.length)))

}//censoredWord('A small sentence with some words','small')

function countStrOcurence(sentence,word){
    let count=0
    let newset=sentence.split(' ')
for(let char of newset){
    if(char==word){
        count++
    }
}
console.log(count)
}//countStrOcurence('This is a word and it also is a sentence','is')