// Create an array that contains the words in the sentence
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
const addExcitement = (theWordArray, punct, punctNumber) => {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""
    let place = 1
    // const punctuation = punct.repeat(punctNumber)
    let punctuation = ""
    for (let i = 0; i < punctNumber; i++) {
        punctuation += punct
        
    }
    
     for (let i = 0; i < theWordArray.length; i++) {
        // Concatenate the new word onto buildMeUp
        const word = theWordArray[i]
        // Print buildMeUp to the console
        if (place % 3 === 0) {
            buildMeUp += `${word}${punctuation} `
        } else {
            buildMeUp += `${word} `
        }
        place += 1
        console.log(buildMeUp)
    }

}

// Invoke the function and pass in the array
addExcitement(sentence, "🎃", 7)