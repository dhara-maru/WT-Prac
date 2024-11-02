function largest(n1,n2,n3){
    let max = 0;
    if(n1>n2 && n1>n3){
        max = n1;
    }
    else if(n2> n1 && n2 > n3){
        max = n2;
    }
    else {
        max = n3;
    }
    return max;

}
console.log(largest(50,4,300))