const reverseString = function(str) {
    let arr=str.split('')
    let arr2=[];
    let l=arr.length-1;
    for(let i=l;i>=0;i--){
        arr2.push(arr[i]);
    }
    return arr2.join('');
};

// Do not edit below this line
module.exports = reverseString;
