class Account{
    min_Bal=500;
    acc_Bal=0;
    acc_Name="";
    set_AccountName(name){
        this.acc_Name=name;
    }
    deposite_Amount(amount)
    {
        this.acc_Bal=this.acc_Bal +amount;
    }
    get_Bal()
        {
            return this.acc_Bal - this.min_Bal;
        }
    
}
let a1=new Account();
let a2=new Account();
console.log(a1);
console.log(a2);
a1.set_AccountName("Rahul");
a2.set_AccountName("Priyanka");
console.log("-----------After Updating the Name-------");
console.log(a1);
console.log(a2);
console.log("---- After Deposite ---");
a1.deposite_Amount(5000);
console.log(a1);
console.log(a2);
