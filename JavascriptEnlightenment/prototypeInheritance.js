var arr=["chicken","mutton"];
console.log(arr.__proto__)
var person = {
    name:"Anand",
    city:'Chennai',
    getIntro:function(){
        console.log(this.name + "from "+ this.city);
    }
}
console.log(person.__proto__);

function log(){
    console.log(arr);
}

console.log(log.__proto__);

var person2={
    name="Tyler"
}

//Never do this just for demonstration
person2.__proto__ = person;




/* Takeaways */
    // Whenever an object is created it has a __proto__.
    // Array.prototype is same as arr.__proto__.
    // arr.__proto__.__proto__ is same as Obect.prototype.
    // arr.__proto__.__proto__.__proto__ is null.