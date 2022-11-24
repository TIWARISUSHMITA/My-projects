//difference b/w == and ===
var a=10;
var b=10;
console.log(a==b)
console.log(typeof (a==b));
var c=11;
var d='11';
console.log(c==d)//comparing the value witout typeof
console.log(c===d);//comparing the value with typeof
/*
== operator is checking the value only no matter it is string or int
whereas === is checking the equilty of value with typeof
*/
/*
output
---------
true
boolean
true
false
*/