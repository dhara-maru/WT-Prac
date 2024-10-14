function countvowels(s){
    s.toLowerCase()
let a = 0;
let i=0;
let e =0;
let o=0;
let u=0;
for(j=0; j<s.length; j++){
    switch(s.charAt(j)){
        case 'a':
            a++;
            break;
        case 'e':
            e++;
            break;
        case 'i':
            i++;
            break;
        case 'o':
            o++;
            break;
        case 'u':
            u++;
            break;
        
    }
}


console.log("a - "+a)
console.log("e - "+e)
console.log("i - "+i)
console.log("o - "+o)
console.log("u - "+u)
}
console.log(countvowels("dhara"))
//console.log(countvowels("bcdfghjklmnp qrstv wxyz"))
//console.log(countvowels("aa ee ii oo uuu"))
//console.log(countvowels("Writing whatever"))