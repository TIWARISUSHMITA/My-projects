// let num=[1,9,7,4,8,2,0,3];
// console.log(num);
// let new_num=num.sort();//to sort the array 
// console.log(new_num);// will get the sorted array
let arr=["f","a","d","b","e","c"];
console.log(arr);
let new_arr=arr.sort();
console.log(new_arr);
// let compare= (a,b)=>{
//     return b-a;
// }
// new_arr.sort(compare);
console.log(new_arr);
let compare= (a,b)=>{
    return a-b;
}
new_arr.sort(compare);
