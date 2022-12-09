//created Account class
class Account{
    min_bal=500;
    open_Account(){
       console.log("plz open the Account");
    }
    deposit_Account()
    {
        console.log("deposite account")

    }
    get_stmt()
    {
        console.log("get stmt about the Account")
    }
    get_Balance()
    {
        console.log("plz enter the PIN to getting the balance")
    }
    withdrwal_Amount()
    {
        console.log("withdrawal Amount")
    }
    close_Acconut()
    {
        console.log("close  Account")
    }
}
//obect creation through new keyword
let a1=new Account();
console.log(Account);
console.log(a1);
console.log(a1.min_bal);
//invoking the method through the Object
a1.open_Account();
a1.deposit_Account();
a1.get_stmt();
a1.get_Balance();
a1.withdrwal_Amount();
a1.close_Acconut();

