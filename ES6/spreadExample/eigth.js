let a={
        uid:101,
        name:"Rahul"
}
let user={ ...a ,
           email:"Rahul@gamil.com"
        };
//console.log(user);
let details={
                email:"Rahul@gmail.com",
                sal:45000,
                location:"Noida"

}

let user_Detaile={...user ,...details};
console.log(user_Detaile);