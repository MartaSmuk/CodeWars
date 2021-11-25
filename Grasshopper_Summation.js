var summation = function (num) {
    if (num > 1) {
      let sum = 0;
      for (let i = num; i > 0; i--) {
        sum += i;
      }
      return sum;
    } else {
      return num;
    }
    }


console.log(summation(4));