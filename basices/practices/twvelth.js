// create an array of aqure og given array
let arr=[1,2,3,4,5,6];
let new_arr=arr.map((value)=>{
    return value*value;
});
console.log(arr);//[ 1, 2, 3, 4, 5, 6 ]
console.log(new_arr);//[ 1, 4, 9, 16, 25, 36 ]
