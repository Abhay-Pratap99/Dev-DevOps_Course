function calculator(a,b,oper){
    return oper(a,b);
}
function add(x,y){
    return x+y;
}
let total=calculator(10,90,add);
console.log(total);