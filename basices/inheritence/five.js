class A{
    constructor(){
        console.log("a const special method");
    }
}
class B extends A{
    constructor(){
        //super
        console.log("B -const special method");
    }
}

new B();
/*
ERROR
------------

     console.log("B -const special method");
                ^

ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
*/
