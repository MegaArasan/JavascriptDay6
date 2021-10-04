// Fix the code to get the largest of three.
aa = (f,s,t) => {
    console.log(f,s,t);
    if(f>s &&f>t){
    console.log(f)}
    else if(s>f && s>t){
    console.log(s)}
    else{
    console.log(t)}
   }
aa(1,2,3); //remove the declaration f,s,t in the inside the function

// Fix the code to Sum of the digits present in the number
    let n = 123;
    function add(n)
    {
     var m=n.toString()
    let sum = 0;
    for(var i=0;i<m.length;i++){
    sum+=parseInt(m[i])
    }
    return sum;
    }  
console.log(add(n));   
 //let sum=0 and convert the number in to string then pass it as a number in for loop

// Fix the code to Sum of all numbers using IIFE function
    const arr1 = [9,8,5,6,4,3,2,1];
    (function(arr1) {
    var sum = 0;
    for (var i = 0; i <arr1.length; i++){
    sum += +arr1[i];
    }
    console.log(sum);
    })(arr1);
// pass arr as a parameter remove return type and remove the semicolon after the forloop

// Fix the code to gen Title caps.
var arro = ["guvi", "geek", "zen", "fullstack"];
var ano = function(arro) {
 for (var i = 0; i < arro.length; i++) {
 console.log(arro[i][0].toUpperCase() + arro[i].substr(1));
 }
}
ano(arro);
// chck typespelling of arro and check condition in for loop

// Fix the code to return the Prime numbers
const newArray=[1,3,2,5,10];
const myPrime=newArray.filter((num)=>{
 for(let i=2;i<=Math.sqrt(num);i++){
 if(num%i===0)
 {
 return false;
 }
 }
 return true
});
console.log(myPrime);
// make change in cxondition

// Fix the code to sum the number in that array
const num = [10, 20, 30, 40,50,60,70,80,90,100] 
const p = (a, b) =>
 a + b;
const plus = num.reduce(p,0)
console.log(plus); // change the name varible declared

// Fix the code to rotate an array by k times and return rotated array using IIFE function
var arr = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
var k = 3;
k = arr.length % k;
(function(arr,k) {
 let out = arr.slice(k+1 , arr.length);
 var count = out.length;
 for (var i = 0; i < k+1 ; i++) {
 out[count] = arr[i];
 count += 1;
 }
 console.log(out);})(arr,k);
//  remove an unwanted declaration of array

// Fix the code to gen Title caps.
var arr2 = ["guvi", "geek", "zen", "fullstack"];
(function(arr2) {
 for (var i = 0; i <arr2.length; i++) {
    console.log(arr2[i][0].toUpperCase() + arr2[i].substr(1));
 }
})(arr2);

// print all odd numbers in an array using IIFE function
var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
(function() {
 for (var i = 0; i < arr.length; i++) {
 if (arr[i] % 2 != 0) {
 console.log(arr[i]);
 }}
})();

// Fix the code to reverse.
(function(str){
   var str1 = str.split("").reverse().join("");
    console.log(str1); 
   })("abcd")

//    Fix the code to remove duplicates.
var res = function(arr){
    var newArr = [];
    for(var i=0; i < arr.length; i++){
    if(newArr.indexOf(arr[i]) === -1) {
    newArr.push(arr[i]);
    } }
    console.log(newArr)
   };
   res(["guvi","geek","guvi","duplicate","geek"]);

//   Fix the code to give the below output:
var array =[[["firstname","vasanth"],["lastname","Raja"],["age",24],["role","JSWizard"]],[["firstname","Sri"],["lastname","Devi"],["age",28],["role", "Coder"]]];
var final=[]

while(array.length!=0)
{
 var outer_remove = array.shift();
 var new_object={}
 while(outer_remove.length!=0)
 {
 var inner_remove = outer_remove.shift()
 var key = inner_remove[0]
 var value =inner_remove[1]
 new_object[key]=value
}
final.push(new_object)
}
console.log(final)

// Sum of odd numbers in an array
var as=[12,34,5,6,2,56,6,2,1];
var s=as.reduce((a,c,)=>{
 if(c%2!=0)
 {
 return a+c;
 }
 return a;},0);
console.log(s);

// Swap the odd and even digits
aa = (data)=>{
    var a=data;
    var l='';
   for(i=0;i<a.length;i++){
    var s=a[i+1]
    var b=a[i]
    l+=s
    l+=b
    i=i+1
   }
   if((a.length%2)!=0){
    l+=a[a.length-1]
   }
   console.log(l);
   }
   aa("1234");