

/*
Spread and Rest operators :
    There is only one operator " ... "
    the Spread and Rest depend on when we use that operator.


    SPREAD :
*/

        //If we use it in an array we simply take out it's elements:
        let array = [1,2,3];
        let newArray = [...array, 4,5];
        console.log("New Array : "  + newArray)

        //we can copy an object and change some properties insade at the same time:
        let obj = {name : "Nasko", age : 24};
        let newObj = { ...obj, name : "Atanas" };  //we copy the obj object but with deferent "name" property 
        console.log(newObj)



/*
    REST :
        This is the same operator " ... " but used in a functions parameters.
        It means that we can have many parameters but we only wright "...args", it receives them as an array.
        
*/

    function myFunc2(...args) { //we only write ...args but we can have many arguments
        console.log(args.join(", ")) //we can treat it as an array
    }


    myFunc2(true, "Param2", 55, 12.21, [1,2,3]);