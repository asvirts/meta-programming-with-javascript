for (let i = 1; i < 11; i++) {
    switch(i) {
        case 1:
        console.log("Gold medal")
        break
        case 2:
        console.log("Silver medal")
        break
        case 3:
        console.log("Bronze medal")
        break
        default:
        console.log(i)
        break
    }
}

// Exercise: Practicing with functions
function letterFinder(word, match) {
    for (let i = 0; i < word.length; i++) {
        if (word[i] == match) {
            console.log("Found the", match, "at", i)
        } else {
            console.log("No match found at", i)
        }
    }
}

letterFinder("test", "t")


// Introduction to objects
let andrew = {
    name: "Andrew Virts",
    occupation: "Web Designer"
}

console.log(andrew)