// use reduce to calculate factorial of a given number from an array of first n natural numbers(n being the number whose factorial needs to be calculated)
let arr=[1,2,3,4,5];
let new_arr= arr.reduce((x1,x2)=>{
    return x1*x2;
});
console.log(arr);//[ 1, 2, 3, 4, 5 ]
console.log(new_arr);// 120
