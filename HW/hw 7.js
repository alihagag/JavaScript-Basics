// task 1
const hasUpperCase = string => {
    string = string.split("")
    return string.some(upper=> upper.charCodeAt(0) > 64 && upper.charCodeAt(0) < 91)
    }

    console.log(hasUpperCase("Javascript"))


// task 2

const noDigit = string => {
    string = string.trim().split("")
    string = string.filter(nodig => !(nodig.charCodeAt(0) > 47 && nodig.charCodeAt(0) < 58))
    return string.join("")
}

console.log(noDigit("Javascri790pt7"))


// task 3

const noVowel = string => {
    string = string.trim().split('')
    string = string.filter(noVow => !(noVow.includes('a') ||noVow.includes('i') ||noVow.includes('o') ||noVow.includes('u') || noVow.includes('e') || noVow.includes('A') ||noVow.includes('I') ||noVow.includes('O') ||noVow.includes('U') || noVow.includes('E')))
    return string.join("")
}

console.log(noVowel("TechGlobal") )


// task 4

const no13 = array => {
   array = array.map(teens => {
        if (teens !== 13) return teens
        else return 0
    })

    return array
}

console.log(no13([13, 13, 13 , 13, 1]))

// task 5

const middleInt = array => {
    array = array.sort((a,b) => a - b)
    return array[1]

}

console.log(middleInt([5, 3, 5]))

// task 6

const sumOfDigits = string => {
    string = string.split("")
    string = string.filter(numsOnly => numsOnly.charCodeAt(0) > 47 && numsOnly.charCodeAt(0) < 58)
    string = string.reduce((sum,nums) => sum += parseInt(nums),0)
    return string 
}


console.log(sumOfDigits("J3avasc5rip6t"))



// task 7


/* 
map 
then using map you need to do a for loop for each one 


*/

const arrFactorial = array => {
    return array.map(numToBeFac => {
        let factorial = 1;
        for (let i = numToBeFac; i > 1; i--) {
            factorial *= i;
        }
        return factorial;
    });
};

console.log(arrFactorial([1, 2, 3 ,4]))



// task 8

const categorizeCharacters = string => {
    string = string.split("")
    let letters = string.filter(letter => (letter.charCodeAt(0) > 65 && letter.charCodeAt(0) <91) || (letter.charCodeAt(0) > 96 && letter.charCodeAt(0) <123)).join('')
    let nums = string.filter(n => n.charCodeAt(0) > 47 && n.charCodeAt(0) < 58 ).join('')
    let specialCharaters = string.filter(sc => sc.charCodeAt(0) >32 && sc.charCodeAt(0)<39).join('')
    const newArray = [letters,nums,specialCharaters]
    return newArray

}

console.log(categorizeCharacters("12ab$%3c%"))


