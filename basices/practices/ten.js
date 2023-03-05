let arr=[1,2,6,3,11,22,10.5,9.5];
let new_arr=arr.filter((a)=>{
    return a>10;
});
console.log(arr);
console.log(new_arr);//filter() to filter the value and provide only filterd value
// fileter() alwayes return the new array