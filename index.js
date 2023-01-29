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
    occupation: "Web Designer",
}

andrew.company = "Stuller"
andrew.college = "University of Alabama"

console.log(andrew)


// Math object
let roundUp = "2.447 rounded up = " + Math.ceil(2.447)
console.log(roundUp)


// Exercise: Creating arrays and objects
let clothes = []
clothes.push("jacket", "pants", "shoes", "socks", "underwear")
clothes.pop()
clothes.push("alabama hat")
console.log(clothes[2])

let favCar = []
favCar.color = "green"
favCar.convertible = false
console.log(favCar)