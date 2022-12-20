const Account=require('./Account')

class Savings_Account extends Account{
    get_Account()
    {
        console.log("get account in the Savigs_Account class");
    }
}
new Savings_Account();


