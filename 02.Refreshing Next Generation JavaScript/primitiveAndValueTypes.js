

console.log("PRIMITIVE AND REFERENCE TYPES : ")

//Number, Strings and Booleans are primitive types, when we assign it's values into another variable it makes a copy of it. 
const mynumber = 2;

//when we set another variable to it, it's actually making a copy of it.
const mynumber2 = mynumber; 



//objects and arrays are reference types.
//They get stored into the memory and pointers get stored in the variables
const person2 = {
    name : 'Max'
}

const person3 = person2;
//now the person2 and person3 store pointers to the same object in the memory.

//if we change one of them, both will change.
person2.name = "Alex";
console.log(person2);
console.log(person3);


//The same goes for arrays:
const array2 = [1,2,3];
const array3 = array2;

//if we change one they will both change.
array2.push(4);

console.log(array2)
console.log(array3)



//TO COPY AN OBJECT OR ARRAY IN A PRIMITIVE WAY WE NEED THE Spread Operator.
const array4 = [...array2];
array2.push(5);

console.log(array2);
console.log(array4); //the array4 stays the same even if we changed the array2. 


const person4 = {
    ...person3
}   

person3.name = "Jake";

console.log(person4); //the name is still Alex even if we chnged it to Jake.

