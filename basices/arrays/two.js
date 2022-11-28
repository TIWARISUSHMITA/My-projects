//common array opertions
let arr=["rahul","sonia","priyanka"];
console.log(arr);
arr.push("modi");//insertion of new element
console.log(arr);
arr.push("kiran");
console.log(arr);
arr.pop("kiran");//deletion of the element at last index
console.log(arr);
arr.shift("rahul");//removing the elemtnt at first index
console.log(arr);
arr.unshift("Ambar");//to add the element at first index
console.log(arr);


/*
[ 'rahul', 'sonia', 'priyanka' ]
[ 'rahul', 'sonia', 'priyanka', 'modi' ]
[ 'rahul', 'sonia', 'priyanka', 'modi', 'kiran' ]
[ 'rahul', 'sonia', 'priyanka', 'modi' ]
[ 'sonia', 'priyanka', 'modi' ]
[ 'Ambar', 'sonia', 'priyanka', 'modi' ]
*/

