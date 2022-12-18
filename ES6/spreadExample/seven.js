//  spread operator in object
let a={
        id:101,
        name:"Rahul",
        email:"rahu@gamil.com"
}
let b={
        email:"rahul@gmail.com",//overidding
        sal:45000,
        city:"Noida"
}
let c={...a , ...b};
console.log(a);
console.log(b);
console.log(c);
//objectdoes not exist duplicates,o that it excuted the email only one time