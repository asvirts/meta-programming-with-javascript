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


// Exercise: Error prevention
function addTwoNums(a, b) {
    console.log(a + b)
}

addTwoNums(7, 16)


// Exercise: Defensive programming
function letterFinder(word, match) {
    var condition1 = typeof(word) == 'string' && word.length >= 2; //if the word is a string and the length is greater than or equal to 2
    var condition2 = typeof(match) == 'string' && match.length == 1; //if the match is a string and the length is equal to 1
    if(condition1 && condition2) { //if both condition matches
        for(var i = 0; i < word.length; i++) {
            if(word[i] == match) {
                //check if the character at this i position in the word is equal to the match
                console.log('Found the', match, 'at', i)
            } else {
                console.log('---No match found at', i)
            }
        }
    } else {
        //if the requirements don't match
        console.log("Please pass correct arguments to the function")
    }
}
letterFinder([],[])
letterFinder("cat","c")


// Introduction to object-oriented programming
let shoes = 100
let stateTax = 1.2

function totalPrice(shoes, tax) {
    return shoes * tax
}

let toPay = totalPrice(shoes, stateTax)
console.log(toPay)

let purchase1 = {
    shoes: 100,
    stateTax: 1.2,
    totalPrice: function() {
        let calculation = purchase1.shoes * purchase1.stateTax
        console.log("Total price:", calculation)
    }
}

let bird = {
    hasWings = true,
    canFly = true,
    hasFeathers = true
}

let eagle1 = Object.create(bird)
console.log("eagle1:", eagle1)