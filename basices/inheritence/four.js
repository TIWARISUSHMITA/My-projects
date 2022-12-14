class A{
    m1(){
        console.log("class A -m1()ethod");
    }
    m2()
    {
        console.log("class A m2()method")
    }
}
class B extends A{
    m1(){
        console.log("class B m1() method")//method overidding
    }
}
let b1=new B();
b1.m1();
b1.m2();
