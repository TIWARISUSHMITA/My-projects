let enames=["Rahul","Sonia","Priyanka","Modi"];
//create new Employee Names in form of Capital case

let new_Names=enames.forEach((ename) => {
    return ename.toUpperCase()
})
console.log(enames);
console.log(new_Names);
/*
[ 'Rahul', 'Sonia', 'Priyanka', 'Modi' ]
undefined
--------------------------------
forEach always return undefined value 
whereas map is alwaays return new array
*/