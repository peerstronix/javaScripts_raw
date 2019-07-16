

//first we create an Immediately Invoked Function
let counter = (function(){

    //private variables and methods (ENCAPSULATION)
    let count = 0;

    function printMsg(msg){
        console.log(msg + "___" + count);
    }

    //return an Object
    return{
        value: count,

        increment: function(){
            count += 1;
            print("After increment: ");
        },

        reset: function(){
            print("Before reset: ");
            count = 0;
            print("After reset");
        }
    }

})();

console.log(counter.count);
console.log(counter.value);


let call = function(name){
    console.log("You are called " + name);
}("Ghaney");