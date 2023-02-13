const fibonacci = function(a) {
    let b=Number(a);
    if(b<0){
        return "OOPS";
    }
    let n1=1;
    let n2=1;
    if(b<3){
        return 1;
    }
    let c=0;
    for(let i=2;i<b;i++){
        c=n1+n2;
        n1=n2;
        n2=c;
    }
    return n2;
};

// Do not edit below this line
module.exports = fibonacci;
