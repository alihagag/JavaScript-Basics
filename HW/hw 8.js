// TASK 1
function isLowerCase(char) {
    let charAscii = char.charCodeAt(0);

    return 97 <= charAscii && charAscii <= 122;
}

const hasLowerCase = string => string.split("").some(letters=> isLowerCase(letters))


console.log(hasLowerCase("JAVASCRIPT"));

// task 2
const noZero = arr => arr.filter(x => x !== 0)

console.log(noZero([0, 1, 10]))

// task 3
const numberAndSquare = arr => arr.map(x=> [x, x**2])


console.log(numberAndSquare([1, 2, 3]))

// task 4
const containsValue = (arr, keyword) => arr.some(x => x === keyword)

console.log(containsValue(["abc", "foo", "hello"], "hello"))


// task 5
const reverseSentence = string =>{
    string = string.split(" ")
    if(string.length > 1){
    string.reverse()
    string[string.length - 1] = string[string.length - 1][0].toLowerCase() + string[string.length - 1].substring(1);
        string[0] = string[0][0].toUpperCase() + string[0].substring(1);
    return string.join(" ")
    } 
    else{
        return 'not enough words'
    } 
}


console.log(reverseSentence("fun is good"))


// task 6
const removeStringSpecialsDigits = string => {
return string.split('').filter(letters => (97 <= letters.charCodeAt(0) && letters.charCodeAt(0) <= 122 ) || (65 <= letters.charCodeAt(0) && letters.charCodeAt(0) <= 90) || letters.charCodeAt(0) === 32).join('')
}

console.log(removeStringSpecialsDigits("123Javascript #$%is fun") )


// task 7
const removeArraySpecialsDigits = arr =>{
    return arr.map(index => index.split('').filter(letters => (97 <= letters.charCodeAt(0) && letters.charCodeAt(0) <= 122 ) || (65 <= letters.charCodeAt(0) && letters.charCodeAt(0) <= 90) || letters.charCodeAt(0) === 32 ).join(""))

}

console.log(removeArraySpecialsDigits(["123Javascript #$%is fun", "Hello123", "Good Morning!"]));

// task 8 
const getCommons = (array1, array2) => {
    return array1.filter(word => {
        return array2.includes(word);
    });
}

console.log(getCommons(["Javascript", "is", "fun", "fun"], ["abc", "xyz", "fun", "fun"]));



// task 9 

const noXInVariables = (arr) => {
    return arr.map(index => {
        if (typeof index === 'string') {
            return index.split('').filter(letter => {
                return letter.toLowerCase() !== 'x'
            }).join('');
        } else {
            return index; 
        }
    });
}

console.log(noXInVariables(["abc", 123, "#$%"]));





