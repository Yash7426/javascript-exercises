const leapYears = function(a) {
    if(a%100==0){
        if(a%400==0){
            return true;
        }
        else{
            return false;
        }
    }
    else if(a%4==0){
        return true;
    }
    else{
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
