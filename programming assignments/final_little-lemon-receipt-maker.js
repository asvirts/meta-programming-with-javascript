// Given variables
const dishData = [
    {
        name: "Italian pasta",
        price: 9.55
    },
    {
        name: "Rice with veggies",
        price: 8.65
    },
    {
        name: "Chicken with potatoes",
        price: 15.55
    },
    {
        name: "Vegetarian Pizza",
        price: 6.45
    },
]
const tax = 1.20;

// Implement getPrices()
function getPrices(taxBoolean) {
    for (let dishes of dishData) {
        let finalPrice
        if (taxBoolean === true) {
            finalPrice = dishes.price * tax
        } else if (taxBoolean === false) {
            finalPrice = dishes.price
        } else {
            console.log("You need to pass a boolean to the getPrices call!")
            return
        }
        console.log(`Dish: ${dishes.name} Price: ${finalPrice}`)
    }
}

// Implement getDiscount()
function getDiscount(taxBoolean, guests) {
    getPrices(taxBoolean)
    let discount = 0
    if (guests > 0 && guests < 30) {
        return discount
    } else if (guests < 5) {
        discount =  5
    } else if (guests >= 5) {
        discount = 10
    }
    console.log("Discount is: $", discount)
}

getDiscount(true, 2)
getDiscount(false, 10)

// Call getDiscount()
