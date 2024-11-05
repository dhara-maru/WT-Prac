const arr = [0,1,2,3,4,5]

arr.push(6)     //[0,1,2,3,4,5,6]
arr.pop()       //[0,1,2,3,4,5]
arr.unshift(9)      //[9,0,1,2,3,4,5]
arr.shift()     //[01,2,3,4,5]  //rollback to unshift
console.log(arr.includes(56));      //false
console.log(arr.indexOf(50));       //-1 bcpz 50 doesn't exist

console.log(arr.slice(1,3));        //[1,2]
console.log(arr.splice(1,3));   //[1,2,3]   and now og array is [0,4,5]   

const gujarat = ['morbi', 'rajkot', 'surat']
const mh = ['mumbai', 'pune', 'nashik']
const gj_mh = [...gujarat, ...mh]       //[ 'morbi', 'rajkot', 'surat', 'mumbai', 'pune', 'nashik' ]
const concated_gj_mh = gujarat.concat(mh)   //same as spread operator
console.log(gj_mh);
console.log(concated_gj_mh);

const myname = "Dhara";
console.log(Array.from(myname))     //[ 'D', 'h', 'a', 'r', 'a' ]

 console.log(arr);

