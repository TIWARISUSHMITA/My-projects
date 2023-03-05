// filter for a number divisible by 10 from a given Array
let arr=[1,3,2,20,30,40,44,5,8,9.8];
let new_arr=arr.filter((a)=>{
    return a%10 ==0;
});
console.log(arr);
console.log(new_arr);//[ 20, 30, 40 ]
