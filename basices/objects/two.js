let emp={
    id  :101,
    name:"Rahul",
    sal :45000
}
console.log(emp);
console.log(emp.id);
console.log(emp.name);
console.log(emp.sal);
emp.name="Rahul Gandhi";//updation 
console.log(emp.name);//
console.log(emp);
emp.loc="Noida";//updation of new key value
console.log(emp);
console.log(typeof emp);//object
delete emp.loc;//deletion
console.log(emp);
