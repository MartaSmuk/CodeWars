function makeNegative(num) {
    if(num > 0){
      let res = num * (-1);
      return res;
    } else {
      return num;
    }
  }

console.log(makeNegative(5));