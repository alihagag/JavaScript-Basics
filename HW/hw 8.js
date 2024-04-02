// TASK 1

const hasLowerCase = string => {
    string = string.split("")
   return string.some(letters=> {
        isLowerCase(letters)
    })
}

console.log(hasLowerCase("JAVASCRIPT"));
