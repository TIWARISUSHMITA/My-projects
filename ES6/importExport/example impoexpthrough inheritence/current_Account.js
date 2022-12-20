const Account=require('./Account')
class current_Account extends Account{
    get_Min_Bal(){
        console.log("get informatio of min balance");
    }
}
new current_Account();
