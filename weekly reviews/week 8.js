// Mutability and Immutability 
/* Mutable: the value of the date type can be changed 
   immutable: the value of te data type can NOT be changed 

   let is mutable 
   const is immutable b/c we dont want to change the data type it stores 

   all PRIMATIVE data types are immutable b/c it gets stored in STACK which means 
   even if it is reassigned later it is still has memory in the stack incase anything else refrences it before that change 

   REFRENCE data types (object/array) are mutable meaning once you change them during any part of the code anything that refreances it 
   also changes its value along with it. */

// there is a way to make objects/arrays immutable by using specifc methods listed out here: 
// Immutable array methods -> concat(), includes(), slice(), at(), flat(), indexOf(), lastIndexOf(), map(), filter(), reduce(), some(), every()
// Mutable array methods -> reverse(), sort(), push(), pop(), shift(), unshift(), splice(),
// best one to use for objects is the spread operator 
//-------------------------------------------------------------------------------------------------------------------------------------------------
// JSON stands for JavaScript Object Notation 
// JSON is used to easily exchange data between serverside and web applications 
// JSON is a string and is there for faster to execute/ trasfter data over since its a premative data type 
// JSON can not take undefined or other refreance data types 
// the way to turn JSON into object is --> const newvariable = JSON.parse(variable name)   AKA sterilzation 
// the way to turn object into JSON is --> const newVariable = JSON.stringify(variable name )  AKA desterilization 
//-----------------------------------------------------------------------------------------------------------------------------------------------
// DEEP copy is creating anew object that is completly independant from the original and does not affect it 
//SHALLOW copy is creating a new object where any nested arrays that are copied are affected by any changes that occur to the original 
//-----------------------------------------------------------------------------------------------------------------------------------------------

// HOISTING  (BEFORE ES6)

/* 
moves deleration to the top only with the keyword var NOT let and const

you will get refrance error with let and const and you willg et type error with var since it knows it exist but doesnt know what its declared as
*/ 








