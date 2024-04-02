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

//------------------------------------------------------------------------------------------------------------------------------------------------

//SCOPE 

/* determintes the accessibility of variables 

there are 4 types of scope: global, function, block (ES6), lexical scope 
global scope: can be used anywhere within the file but becareful with the declleration 
function scope: if you create a variable inside var or not it can not be used outside 
^^ var let const behave the same in these scopes 

block {} scope: var can be used outside of the block and does not support block 


lexical scope: used with nested functions which is saying he nested can access the outer but not the other way around 
var let and cost behave the same way in this

//-------------------------------------------------------------------------------------------------------------------------------

//CLOSURE 

/* can help with not having some variables be reassigned 
its basicly establishing the varibale within the function so it cant be acessed anywhere outside of it. 

//------------------------------------------------------------------------------------------------------------------------------------------

// ES6

/* var has been around since 1995 
let and const came in ES6 
var is hoistined while the others are not inaddition let can be reassigned while const can not. 
let is mutable and const is immutable  */ 

/* string templete: allows you to do miltiple lines, can easily add expressions via templete litterials ${} */ 

// arrow functions 

// spread operator ; allows the properties of an object or the index of an array to be added to another one or copies with ease 
// default parameters : the declared variables in a function need to have a fall back incase you dont give any inputs for it 

function example ( input1 = "ali", input2 = "hagag"){
// here is an example of default perameters, the default will be hagag if they dont put anything 
}


// rest parameters (...) --> allow us to create a method that works with any number of aruments 

function sum (...arg){
    let sum = 0
    for (const ar of arg){
        let sum = 0
        sum += ar
    }
    return sum
}

// array destructurig : allows us to make variables for each index of an array without the extra mess 
// object destructring: same as array but needs to have the same name as the keys

//_---------------------------------------------------------------------------------------------------------------------------

//OOP --> Object Oriented Programming 

/* allows programmers to put real life objects into code 
it helps maintain code easily 
it has code reusability and inheritance 
simplicity 


complited lanuges use class orirnted oop languges 
Javascript is progotype based funcional launguage 
es6 added classes to JS 

typeScript is a superset ofJ JS  and is typed lanugnage 
*/





//10 -setter-Getter
class Book {
        constructor(title, genre, page) {
            this.title = title;
            this.genre = genre;
            this.page = page;
        }
    getTitle(){
        return this.title
    }
    }


const book1 = new Book("js","journal",1000)



// book1.page = -5
// book1.title = ''

// console.log(book1) // Book { title: '', genre: 'journal', page: -5 }



// setPage(numOfPages){
//     if(numOfPages > 0) this.page = numOfPages
//     else throw Error ('Number of pages can NOT be zero!!')
// }

// POINT 




// callback example

function connectToSource(callback) {
    setTimeout(() => {
        console.log(`you are now connected to Source`)
        callback()
    }, 5000)

}


function fetchData(callback) {
    setTimeout(() => {
        console.log(`you have now fetched data`)
        callback()
    }, 3000)
}

function useData() {
    setTimeout(() => {
        console.log(`you are now using the data that you have fetched`)
    }, 1000)
}


function order (){
    connectToSource(()=> {
        fetchData(() => {
            useData()
        })
    })
}

order();





Program.then(()=> {
    goToApp(() => {
        clickOnButton(()=>{
            closeApp()
        })
    })
})





//__________________________________________________________

function goToCostco() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('GO TO COSTCO');
            if(true) resolve();
            else reject('Car is broken!');
        }, 2000);
    });
}

function getMeat() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('GET THE MEAT');
            if(true) resolve();
            else reject('Could not get the meat, Costco was closed!');
        }, 1500);
    });
}

function cook() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('COOK');
            if(true) resolve();
            else reject('Cooking did not go well!');
        }, 3000);
    });
}

function serve() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('SERVE');
            if(true) resolve();
            else reject('Serving issue');
        }, 1000);
    });
}

function eat() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('EAT');
            if(true) resolve();
            else reject('Could not eat');
        }, 500);
    });
}

// promises handling with then() and catch()
function party1() {

}

// promises handling with async and await
function party2() {
    
}


async function process(){
    try{
    await goToCostco()
    await getMeat()
    await cook()
    await serve()
    await eat()
    } catch(err){
        console.log(err)
    }
}


process()



function process2(){
    goToCostco().then(()=>{
        
    })
}