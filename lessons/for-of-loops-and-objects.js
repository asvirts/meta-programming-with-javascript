const colors = ['red','orange','yellow']
for (var color of colors) {
    console.log(color);
}

const car = {
    speed: 200,
    color: "crimson"
}
console.log(Object.keys(car)) // ["speed", "color"]
console.log(Object.values(car)) // [200, "crimson"]
console.log(Object.entries(car)) // [ ['speed', 200], ['color', 'crimson'] ]