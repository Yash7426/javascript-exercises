const palindromes = function (a) {
    let b=a.toLowerCase();
    let arr=b.split('');
    let new1=arr.filter(ay => isalpha(ay));
    let new2=[];
    for(let i=new1.length-1;i>=0;i--){
        new2.push(new1[i]);
    }
    for(let i=0;i<new2.length;i++){
        if(new1[i]==new2[i]){
            continue;
        }
        else{
            return false;
        }
    }
    return true;

};
var isalpha = function(ch){
    return typeof ch === "string" && ch.length === 1
           && (ch >= "a" && ch <= "z" || ch >= "A" && ch <= "Z");
  }

// Do not edit below this line
module.exports = palindromes;
