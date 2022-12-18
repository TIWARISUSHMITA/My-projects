let enames=["Rahul","sonia","Priyanka","Modi"];
//createnew Emplyee Name in form of-capital case

let new_Enames=enames.map((ename) => {
    return ename.toLocaleUpperCase()
})

console.log(enames);
console.log(new_Enames);
/*
[ 'Rahul', 'sonia', 'Priyanka', 'Modi' ]
[ 'RAHUL', 'SONIA', 'PRIYANKA', 'MODI' ]
--------------------------------------------

map always returns new array whereas forEach returns undefind
*/