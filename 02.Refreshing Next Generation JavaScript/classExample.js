class Human {
    constructor() {
        this.FirstName = "John"
        this.LastName = "Smith"
    }    

    printFullName(){
        console.log("Full name is : " + this.FirstName + " " + this.LastName);
    }
}

class Person extends Human {
    constructor(){
        super();  //WE NEED THE super() METHOD IF WE INHERIT CLASSES
        this.SocialSecurity = 245512552;
    }
    
    /*
        WE NEED BABEL FOR THIS NEW SINTAX

        SocialSecurity = 245512552; //We can declare properties outside the constructor
        //We can have a property that stores a function s a value
        printSocialSecurity = () => {
            console.log("Social security is : " + this.SocialSecurity);
        }
    */
    
    printSocialSecurity() {
        console.log("Social security is : " + this.SocialSecurity);
    }
}

class Student extends Person {
    constructor(){
        super(); //WE NEED THE super() METHOD IF WE INHERIT CLASSES
        this.AverageGrade = 5.50;
    }

    printAverageGrade(){
        console.log("Average grade is : " + this.AverageGrade)
    }
}


console.log("Classess and Inheritance Example:")

let student = new Student(); // We need the new keyword to create instances
student.FirstName = "Atanas";
student.LastName = "Kambitov";

student.printFullName();
student.printSocialSecurity();
student.printAverageGrade();
