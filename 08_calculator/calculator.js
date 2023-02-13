const add = function(...args) {
  const t=args.reduce((total,arg) => {
    return total+arg;
  },0);
  return t;	
};

const subtract = function(a,b) {
  return a-b;	
};

const sum = function(a) {
  const t=a.reduce((total,arg) => {
    return total+arg;
  },0);
  return t;
};

const multiply = function(a) {
  const t=a.reduce((total,arg) => {
    return total*arg;
  },1);
  return t;
};

const power = function(a,b) {
  return a**b;
};

const factorial = function(a) {
  let f=1;
  for(let i=1;i<=a;i++){
    f=f*i;
  }
  return f;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
