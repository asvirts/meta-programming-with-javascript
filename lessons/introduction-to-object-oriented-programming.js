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
    hasWings: true,
    canFly: true,
    hasFeathers: true
}

let eagle1 = Object.create(bird)
console.log("eagle1:", eagle1)