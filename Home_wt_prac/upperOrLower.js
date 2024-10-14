function check(c){
   const c1 =  c.charCodeAt(0);
    if(c1 <= 90 && c1 >= 65){
        console.log(c + " is uppercase")
    }
    else if(c1 <= 122 && c1 >= 97){
        console.log(c + " is lowercase")
    }
    else{
        console.log(c + " is neither upper nor lower.")
    }
}
//check('a')
//check('A')
check('1')