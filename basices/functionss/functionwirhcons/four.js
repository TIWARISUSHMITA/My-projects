class Account{
    acc_Id;
    acc_Name;
    acc_Bal=0;
    constructor(id,name,amount)
    {
        this.acc_Id=id;
        this.acc_Name=name;
        this.acc_Bal=amount
    }
}
let a1=new Account(101,"Rahul",5000);
console.log(a1);
console.log(a1.acc_Id);
let a2=new Account(102,"Priyanka",45000);
console.log(a2)