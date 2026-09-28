// let sum=function(a,b){
//     return (a+b);
// }
// console.log(sum(5,6));
// console.log("Code Execution Successfully");

function sum(a,b){
    return a+b;
}
sum(sum(1,3),4); //first call inner funciton and then call outer function 
console.log(sum());