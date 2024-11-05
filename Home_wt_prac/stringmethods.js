const name = 'dhara'
console.log(name[0]);       //d
console.log(name.length);   //5
console.log(name.toUpperCase());    //DHARA
console.log(name.indexOf('a'));     //2
console.log(name.lastIndexOf('a'));     //4


const fname = "Dhara Maru"

const last = fname.slice(6, fname.length)
console.log(last);     //Maru

const words = fname.split(' ')
console.log(words);     //[ 'Dhara', 'Maru' ]
console.log(words[1]);  //Maru

const mytext = "RandomWord"
const first = mytext.substring(2, 5)    //this means from INDEX 2 to INDEX 5th
const firstwithSUBSTR = mytext.substr(2, 5)     //this means from INDEX 2 to 5-1 next letters
console.log(first)      //ndo
console.log(firstwithSUBSTR);       //ndoW


console.log(fname.includes('hetvi'));       //false

const newname = '       trim         '
console.log(newname);       //       trim         
console.log(newname.trim());        //trim

const newline = "Hello world"
const str2 = "world"
console.log(newline.concat(",", str2));     //Hello world,world


const replaced = newline.replace("Hello", "HI")
console.log(replaced);
















