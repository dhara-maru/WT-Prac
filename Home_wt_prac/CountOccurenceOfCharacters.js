function CountOccurenceOfCharacters(s, ch){
    let count =0;
    for(i=0; i<s.length; i++){
        if(s.charAt(i) == ch){
            count++;
        }
    }
    return count;
}
let ch = 'a'
let s = 'Hello this is my string which contains the letter \'a\' somewhere i don\'t know how many times.'
//let s = 'dhara'
//let s = 'aaaaa'

console.log(CountOccurenceOfCharacters(s, ch))
