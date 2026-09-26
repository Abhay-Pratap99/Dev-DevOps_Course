let greet="Hellow";
function outer(){
    let greet ="Namaste";
    console.log(greet);
    function inner(){
        console.log(greet);
    }
    inner()
}
outer();