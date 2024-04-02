// doube 

const doubleOrTripleWord = string => {
    if(string.length % 2 === 0){
        return string.repeat(3)
    }
    else {
        return string.repeat(2)
    }
}

console.log(doubleOrTripleWord(" "))


// first last word 

const firstlastWord = string => {
    string = string.trim().split(" ")
    return string[0] + string[string.length -1]
}

console.log(firstlastWord('hi there Ali'))


// has vowel

const hasVowel = string => string.toLowerCase().includes("a") || string.includes("e") ||string.includes("i") ||string.includes("o") ||string.includes("u")

console.log(hasVowel("hi Ali"))

// start vowel 

const startVowel = string => {
    string = string.trim().toLowerCase()
    return string.startsWith("a") ||string.startsWith("e") ||string.startsWith("i") ||string.startsWith("o") ||string.startsWith("u")

}

console.log(startVowel("Li"))






