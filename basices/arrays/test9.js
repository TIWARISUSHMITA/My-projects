// WAP to find the sum of elements present in a given array
function cal_Sum(arr) {
    var sum=0;
    for(num of arr){
        sum = sum+num;
    }
    return sum;
}
let result=cal_Sum([1+2+3+4]);
console.log(result);