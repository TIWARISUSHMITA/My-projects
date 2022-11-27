//methods of string
let s="I love JavaScript ";
console.log(s);//I love JavaScript
let len=s.length;
console.log(len);//17
let j="java";
let asnwer=s.concat(j);
console.log(asnwer);//I love JavaScriptjava
let ch=asnwer.charAt(0);
console.log(ch);//I
 let index1=s.indexOf("S");
 console.log(index1);//11
 let index2=s.lastIndexOf("p");
 console.log(index2);//15
 console.log(s.toUpperCase());//I LOVE JAVASCRIPT
 console.log(s.toLowerCase());//i love javascript
let sub = s.substring(7 ,17) //sunstring to  remove some part of the  given string except the given index value
console.log(sub);//JavaScript
console.log(s.startsWith());//false
console.log(s.startsWith("I"));//true,firstly it check the given vaalue that is mathcing with sme string if ,matched the getting true  otherwise false
console.log(s.endsWith());//false
console.log(s.endsWith("Script "));//true
let sp=s.split(" ");
console.log(sp);//[ 'I', 'love', 'JavaScript', '' ]
console.log(sp[4]);
console.log(sp[3]);
console.log(sp[1]);
let s1="          javaScript       ";
let tr=s1.trim();
console.log(s1);//          javaScript
console.log(tr);//javaScript
/*
let ch="iknow javaScript and very well";
let answer=ch.charAt(1);
console.log(answer);*/
/*
importent string functions
---------------------------
1. length()
2. concat() = to adding two strings 
3. charAt() = checking the current position of characters
4. indexof() = first apperence count
5. lastindexof() = to check last index 
6.toUpperCase()
7. toLowerCase()
8. substring() or substring(start,end)
9. startwith() to check the string 
10. startsWith()
11. endsWith()
12. split()

4. 
*/