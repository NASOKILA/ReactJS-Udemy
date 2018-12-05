
console.log("DESTRUCTION : ");


console.log("Array Destruction : ");
//Array destruction
const names = ["Nasko", "Asi", "Toni"];
let [a,b,c] = names;
console.log(a)
console.log(b)
console.log(c)

let [nasko, ,toni] = names; //we can take and skip names from that array.
console.log(nasko, toni);


console.log("Object Destruction : ");
//Object Destruction
//We take the property which has the same name as the name of our variable
let {myName} = { myName : "Atanas", age : 25, gender : "Male" };
console.log(name);
