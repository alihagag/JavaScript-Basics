const arrayEx1 = ["Ali", "John", "Phill"] // string array 
const arrayEx2 = [ 1,2,3] // numbers array 

// arrays are REFFERANCE data types, and they can be be a string or can be numbers, its best practice not to intermix the two in the same array 
// arrays always use the KEY word CONST for creation so no one can mess around with it after being decalred 
// arrays are incased in square brakets which are also called array literals []

const arrayEX3 = new Array("Ali", "jimmy")  // This is another way of creating an array called ARRAY CONSTRUCTOR 

Array.isArray(arrayEx2) // True.... used to check if the variable is an array or not 

console.log(typeof arrayEx2) // object because remember.. its a refrence OBJECT. It will NOT say its an array 

console.log(arrayEx1 [1]) // John .. since thats the index of john 
console.log(arrayEx1 [3]) // undefined because there is none 
console.log(arrayEx1[-1]) // undefined because it doesnt work backward for array litterals 

// at() Methods 
console.log(arrayEX3.at(-1)) // jimmy... will work for () and at is used to locate indexes and can go in the negitives. 

// SPLIT
let wordsEX1 = "Hi there I am Ali"
console.log(wordsEX1.split(' ')) // [ 'Hi', 'there', 'I', 'am', 'Ali' ] ...
//this is if you DONT have an array but a string and wanna turn it into a array by splitting it whereever there is a space. DOESNT CHANGE ORIGINAL ARRAY

// SLICE
let wordsEX2 = ["hey", "there", "Ali", "Hows", "it", "going?"]
wordsEX2.slice(0,3)// cant be done... needs to be stored in a NEW ARRAY
let wordsEX3 = wordsEX2.slice(0,3)
console.log(wordsEX3) // [ 'hey', 'there', 'Ali' ]   ... again needs to be stored in a new array just as a reminder 

// PUSH () method
const arrayEX4 = ["Ali", "John", "Phill"]
arrayEX4.push("Darin")// will add Darin to the array at the END
console.log(arrayEX4.push("Jalen")) // 4 ... returns the length of the array in addition to adding Darin Jalen to the array at the END

// Pop () method 
const arrayEX5 = ["Ali", "John", "Phill"]
arrayEX5.pop() // removed Phill from the END 
console.log(arrayEX5.pop()) // John ... returns te REMOVED name from the array from the END

//shift () Matod
const arrayEX6 =  ["Ali", "John", "Phill"]
arrayEX6.shift() //  removes Ali from the START of array
console.log(arrayEX6.shift()) // John... returns removed index from the START of array

//unshift() Method
const arrayEX7 = ["Ali", "John", "Phill"]
arrayEX7.unshift("Sharif") // adds sharif at the START
console.log(arrayEX7.unshift("mohamad")) // 5.. returns new length of array

// indexOf() method 
const arrayEX8 = ["Ali", "John", "Phill"]
console.log(arrayEX8.indexOf("Ali")) //  0 .. which is the index of Ali in the array

//lastIndexOf() method
const arrayEX9 = ["Ali", "John", "Phill"]
console.log(arrayEX9.lastIndexOf("Ali")) // 0 ... its the only index of Ali there but regardless it will give you the last one if there was a duplicate 

// includes () method 
const arrayEX10 =  ["Ali", "John", "Phill"]
console.log(arrayEX10.includes("Ali"))// true 

// concat() method 
const arrayEX11 = ["Ali", "John", "Phill"]
const arrayEX12 = ["sharif","Mohamad"]
console.log(arrayEX11.concat(arrayEX12))//[ 'Ali', 'John', 'Phill', 'sharif', 'Mohamad' ] ..  will combine the two arrays 

// spread operator 
const arrayEX13 = ["Ali", "John", "Phill"]
const arrayEX14 =  ["sharif","Mohamad"]
const arrayEX15 = [...arrayEX13,...arrayEX14] // creates a new array not reffrencing the old ones incase we wanna change anyting in arrayEX15
console.log(arrayEX15)// [ 'Ali', 'John', 'Phill', 'sharif', 'Mohamad' ]  .. joins the arrays together or lets you add it to anything overall 

// reverse() method 

const arrayEX16 = ["Ali", "John", "Phill"]
arrayEX16.reverse()
console.log(arrayEX16)// [ 'Phill', 'John', 'Ali' ]
const arrayEX17 = [...arrayEX16] //  we do this because if we just refferanced arrayEX16 directly then anyhting we do to it will also change arrayEX16 along with arrayEX17 
arrayEX17.reverse()
console.log(`${arrayEX16}
${arrayEX17}}`) //  will show that they are two diff arrays now instead of the same one 

// sort()
const arrayEX18 = ["Ali", "Phill", "John", "ali"]
arrayEX18.sort()
console.log(arrayEX18) //[ 'Ali', 'John', 'Phill', 'ali' ] it sorts based on letters from A-Z then a-z 
// doesnt work as well with numbers since it converts the numbers to letters and does it based on that 

// flat() method 
const arrayEX19 = ["Ali", "Phill", ["jimmy", "sharif",["Rana","Eman",["nabil","henderson"]]]]
console.log(arrayEX19.flat())//["Ali", "Phill", "jimmy", "sharif",["Rana","Eman",["nabil","henderson"]]]
console.log(arrayEX19.flat(Infinity))//["Ali", "Phill", "jimmy", "sharif","Rana","Eman","nabil","henderson"]
// flat will remove nested arrays that can otherwise be annoying. you can put the number of times in the flat(10) to do it a certian number of times 

// join() method 
const arrayEx20 = ["Ali", "Phill", "John", "ali"]
console.log(arrayEx20.join("---"))//Ali---Phill---John---ali... joins them with whatever you put inthe brackets, if you dont put anyhting it does it with a comma 
console.log(arrayEx20.join())// Ali,Phill,John,ali 

// destructuring 
const arrayEx21 = ["username", "email", "password"]
const [placeHolder1, placeholder2, placeholder3] = arrayEx21
console.log(placeHolder1)// username
console.log(placeholder2)// email
// its another way of assiging vaiables to elements within the array without doing let or var every time since its annoing
// if you wanna skip one then you jsut gotta put a comma in its place like [placeHolder1,, placeholder3]

// 
















