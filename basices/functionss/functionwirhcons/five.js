class Employee
{
    emp_Id;
    emp_Name;
    constructor(id,name)
{
    this.emp_Id=id;
    this.emp_Name=name;

}
    get_Details()
    {
    }
}
let e1=new Employee(101,"Rahul");
console.log(e1);
let e2=new Employee(102);
let e3=new Employee(103);
console.log(e2);
console.log(e3);
let e4=new Employee(104,"Sonia");
console.log(e4);