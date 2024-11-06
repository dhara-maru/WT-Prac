let n1 = 10;
{
    let n1 = 20;
    console.log(n1);        //20 
    
}
console.log(n1);        //10 //goes back to the initial value

var n2 = 100;
{
    var n2= 200;        
    console.log(n2);        //200
    
}
console.log(n2);        //200 value is changed 4ever bcoz of global scope
