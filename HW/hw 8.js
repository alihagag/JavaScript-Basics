// task 1
console.log('===============');

function doubleOrTripleWord(string){

    if(string.length % 2 === 0){
        return string.repeat(3)
    }
    else if(string.length === 0){
        return string
    }
    else{
        return string.repeat(2)
    }
}

console.log(doubleOrTripleWord(' '))

// task 2
console.log('===============');

const firstLastWord = str => {
    if (str.length < 1) return str;
    str = str.split(' ');
    return str[0] + str[str.length - 1]
}
console.log(firstLastWord('Hello World'));


// task 3 
console.log('===============');

const hasVowel = function(string){
    string =string.toLowerCase().split('')
    return string.some(letters => letters.includes('a') || letters.includes('e') || letters.includes('i') || letters.includes('o') || letters.includes('u'))
}

console.log(hasVowel('Ali'))

// task 4
console.log('===============');

const startVowel = str => {
    return 'aeiou'.includes(str.toLowerCase()[0])
}

console.log(startVowel('Hello'))
console.log(startVowel('Apple'))
console.log(startVowel('Igloo'))


// task 5
console.log('===============');

const averageOfEdges = (n1,n2,n3) => {
    let max = Math.max(n1,n2,n3)
    let min = Math.min(n1,n2,n3)
    return (max +min)/ 2
}

console.log(averageOfEdges(5,10,15))


// task 6
console.log('===============');
const replaceFirstLast = str => {
    str = str.trim();
    if(str.length < 2) return '';
    let firstChar = str[0];
    let middle = str.slice(1, str.length-1);
    let lastChar = str.slice(-1)
    return lastChar + middle + firstChar;
}
console.log(replaceFirstLast('Hello'))
console.log(replaceFirstLast('Tech Global'))
console.log(replaceFirstLast('      A         '))

// task 7
console.log('===============');

const swap4 = string => {
    string = string.trim()
    if(string.length < 8) return "" 
    return string.slice(string.length - 4) + string.slice(4,string.length - 4) + string.slice(0,4)
}

console.log(swap4("abc"))
console.log(swap4("JavaScript"))
console.log(swap4("TechGlobal") )


// task 8 
console.log('===============');

const swapFirstLastWord = str => {
    str = str.trim().split(' ');
    if (str.length < 2) return '';
    str = [str.slice(-1), str.slice(1, -1), str[0]].flat();
    return str.join(' ');
}

console.log(swapFirstLastWord('Hello World'))
console.log(swapFirstLastWord('I like JavaScript'))
console.log(swapFirstLastWord('Foo bar foo bar'))
console.log(swapFirstLastWord('   '))

// task 9
console.log('===============');

function countPos(arr){
    return arr.filter( num => num > 0). length

}

console.log(countPos([-45, 0, 0, 34, 5, 67]))
console.log(countPos(([-23, -4, 0, 2, 5, 90, 123])))
console.log(countPos([0, -1, -2, -3]))


// task 10 
console.log('===============');

const getEvens = (n1, n2) => {
    let arr = []
    for (let i = Math.min(n1,n2); i <= Math.max(n1,n2); i++) {
        if(i % 2 === 0) arr.push(i)
    }
return arr.sort((a, b) => a - b);
}

console.log(getEvens(2,7));
console.log(getEvens(17,5));
console.log(getEvens(4,4));
console.log(getEvens(3,3));


// task 11
console.log('===============');

const getMultipleOf5 = (n1, n2) => {
    let arr = []
    for (let i = Math.min(n1,n2); i <= Math.max(n1,n2); i++) {
        if(i % 5 === 0) arr.push(i)
    }
return arr.sort((a, b) => a - b);
}


console.log(getMultipleOf5(3,17))


// task 12
console.log('===============');
function countNeg(arr){
    return arr.filter( num => num < 0). length

}

console.log(countNeg([-45, 0, 0, 34, 5, 67]))
console.log(countNeg(([-23, -4, 0, 2, 5, 90, 123])))
console.log(countNeg([0, -1, -2, -3]))


// task 13

console.log('===============');

const countA = str => {
    str = str.trim().toLowerCase().split('');
    return str.filter((char) => char === 'a').length;
}
console.log(countA('TechGlobal is a QA bootcamp'));
console.log(countA('QA stands for Quality Assurance'));
console.log(countA('Cypress'));



// task 14
console.log('===============');
const  countWords = string => {
    string = string.trim().split(" ")
    return string.filter(i => i !== "").length 
}

console.log(countWords("Cypress is a UI     automation tool"));


// task 15
console.log('===============');

const factorial = num => {
    if (num === 0 || num === 1) return 1
    return num * factorial(num - 1);
}

console.log(factorial(5));


// task 16
console.log('===============');

const count3OrLess = str => {
    str = str.trim();
    if (!str.includes(' ')) return 0;
   return str.split(' ').filter(word => !(word.length <= 2)).length;
}

console.log(count3OrLess('Hello'));
console.log(count3OrLess('Hi John'));
console.log(count3OrLess('JavaScript is fun'));
console.log(count3OrLess('My name is John Doe'));
console.log(count3OrLess(''));





// task 17
console.log('===============');


function removeExtraSpaces(string){
   string =  string.trim().split(' ')
   return string.filter(x => x !== "").length

}

console.log(removeExtraSpaces('     hi there    buddy    i love    you '))


// task 18
console.log('===============');


function middleInt(n1,n2,n3){
    let nums = [n1,n2,n3]
    nums = nums.sort( (a,b) => a-b)
    return nums [1]

}


console.log(middleInt(3,6,1))


// task 19
console.log('===============');

const firstDuplicate = arr => {
//USE FOR LOOP
}
console.log(firstDuplicate([3,7,10,0,3,10]));
console.log(firstDuplicate([5,7,7,0,5,10]));
console.log(firstDuplicate([5,5,3,7,4]));
console.log(firstDuplicate([123, 'abc', '123', 3, 'abc']));
console.log(firstDuplicate([1, 2, 3]));
console.log(firstDuplicate(['foo', 'abc', '123', 'bar']));












function no3and5(arr) {
    return arr.map(el => {
        if (el % 5 === 0 && el % 3 === 0) {
            return 101
        }
        else if (el % 5 === 0) {
            return 99
        }
        else if (el % 3 === 0) {
            return 100

        }
        else {
            return el
        }

    })
}

console.log(no3and5([10, 11, 12, 13, 14, 15]))


