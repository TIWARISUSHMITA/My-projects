function mouseOver() {
    let ref=document.getElementById('abc');
    console.log(ref);
    ref.style.backgroundColor="green";
}
function onClick() {
    let ref1=document.getElementById('efg');
    console.log(ref1);
    ref1.style.backgroundColor="yellow";
}
function onFocus() {
    document.getElementById('xyz').style.background="aqua";
}
function onBlur() {
  let uname=  document.getElementById('mno').value;
  console.log(uname);
  document.getElementById('mno').value=uname.toUpperCase();
 

}
function mouseOut() {
    
    let ref2=document.getElementById('pqr').style.background="green";
    /* console.log(ref2);
    ref2.style.backgroundColor="green";*/
}
function dblClick() {
   let ref3= document.getElementById('sst') .style="background-color:green"
  
}
