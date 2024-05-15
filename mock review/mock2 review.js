// task 1

function doubleOrTriple(string){
    if (string.length % 2 === 0){
        return string.repeat(3)
    }
    else {
        return string.repeat(2)
    }
}

console.log(doubleOrTriple('Hi'))
//______________________________________________________

// task 2
function firstLastWord(string){
    if(string.length > 1){
        string = string.split(' ')
        return string[0] + string[string.length -1]

    }
    else{
        return string
    }
}

console.log(firstLastWord('hi there Ali'))
//___________________________________________________________

// task 3


function hasVowel(string){
    return string.toLowerCase().split('').some( letter => letter.includes("a") ||letter.includes("e") ||letter.includes("i") ||letter.includes("o") ||letter.includes("u"))
}

console.log(hasVowel('hiThere'))
// _____________________________________________________

 // task 4

 function startVowel(string){
    string = string.toLowerCase()
    return string[0].startsWith('a')||string[0].startsWith('e')||string[0].startsWith('i')||string[0].startsWith('o')||string[0].startsWith('u')
 }

 console.log(startVowel('Ali Hagag'))

 // _____________________________________________________

 // task 5

 function averageOfEdges (num1,num2,num3){
    let max = Math.max(num1,num2,num3)
    let min = Math.min(num1,num2,num3)
    return (max +min)/2

 }

 console.log(averageOfEdges(5,10,15))
 //_________________________________________________

 // task 6  (COME BACK TO)
 

 function replaceFirstLast(stirng){
    return string [string.length - 1] [0] + string.substring()

 }

 // TASK 7

 // task 8 

 // task 9 
 function countPos(arr){
    arr.reduce((counter,el) => el > 0, count =0))
 }

 console.log(countPos([1,2,3,4,-5,-6]))