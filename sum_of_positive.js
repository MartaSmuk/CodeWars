

function positiveSum(arr) {
let sumPosNum = 0;
for(let i=0; i < arr.length; i++) {
    if(arr[i] >= 0){
        sumPosNum += arr[i];
    } else {
        continue;
    }
}
return sumPosNum;
}

console.log(positiveSum([1,-4,7,12]))

