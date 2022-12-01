//program to creat JavaScript object using objeect literal
const employee={
                    name  :"SushmitaTiwari",
                    salary:45000,
                    location:["Bangalore","Noida","USA"],
                    greet:function()
                    {
                        console.log("Hello! WelCome to Pro Stack Academy");
                    },
};
console.log(typeof employee);
console.log(employee.name);
console.log(employee.location[0]);
employee.greet();
