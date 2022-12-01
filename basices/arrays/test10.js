//WAP  to check whether the elemtnts of a given array are identical(same) or not
function identical(arr) {
    var first =arr[0];
    for(var i=1;i<=arr.length -1;i++)
    {
        if (arr[i] != first){
            return false;
        }
    }
    return false;
}
let result =identical([10,20,30,40,50]);
console.log(result);
let result1 = identical([10,10]);
console.log(result1);