let a=[1,2,3,4,5,6];
console.log(a);//[ 1, 2, 3, 4, 5, 6 ] to print array with set
console.log(a[0]);//to print particular index value
//type is not fixed in js only
let b=[1,2,4.5,"hello",true];
console.log(b);//[ 1, 2, 4.5, 'hello', true ] Hetrogenius element is aloowed
console.log(b[0]);//1
console.log(b[1]);//2
console.log(b[2]);//4.5
console.log(b[3]);//hello
console.log(b[4]);//true
let enames=new Array("Rahul","sonia","priyanka");//array creation through the construction
console.log(enames);//[ 'Rahul', 'sonia', 'priyanka' ]
enames.push("modi");//updation of the array
console.log(enames);//[ 'Rahul', 'sonia', 'priyanka', 'modi' ]
console.log("size of enames is : "+enames.length);//size of enames is : 4
