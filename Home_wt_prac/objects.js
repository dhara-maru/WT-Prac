// const mysymbol = Symbol("mysym1")
// const jsuser = {
//     name : "Dhara",
//     age : 20,
//     city : "Morbi",
//     email : "dhara123@google.com",
//     isLoggedIn : false,
//     loginOn : ['Monday', 'Friday'],
//     [mysymbol] : "mysymbol1"
// }

// console.log(jsuser.loginOn);        //[ 'Monday', 'Friday' ]
// console.log(jsuser[mysymbol]);

// jsuser.name = "hetvi"


const emailregex = /\w+@\w+\.\w+/;
const e1 = "dhara123@gmail.com"     //valid
const e2 = "dhara@gmail.com"        //valid
const e3 = "dhara"      //invalid
const e4 = "12345@gmail.com"        //valid

const indianno = /^[6-9]\d{9}$/;
const p1 = '9876543210'     //valid
const p2 = '5323569867'     //not valid coz it doesn't start from 6 to 9
const p3 = '987654321'      //not valid bcoz only 9 digits are there


if(!indianno.test(p2)){
    console.log("Not a valid indian number");
    
}
else{
    console.log("It's a valid indian number");
    
}


if(!emailregex.test(e4)){
    console.log("Not a  valid email");
    
}
else{
    console.log("It's a valid email");
    
}
