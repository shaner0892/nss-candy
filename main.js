// 1. Buy some milk chocolate
const buyChocolate = () => {
    const newChocolateObject = {
        type: "Milk chocolate"
    }
    return newChocolateObject
}
let candy = buyChocolate()
// console.log(candy)

// 2. Add some mint flavoring
const addFlavoring = (candyObject) => {
    candyObject.flavor = "mint"
    return candyObject
}
let candyWithFlavor = addFlavoring(candy)
// console.log(candy)

// 3. Combine the chocolate and mint
const makeBarkMixture = (candyObject) => {
    if (candyObject.flavor === "mint") {
        candyObject.mixed = true
    } else {
        candyObject.mixed =false
    }
    return candyObject
}
let candyWithMix = makeBarkMixture(candy)
// console.log(candy)

// 4. Bake the mixture
const bakeCandy = (candyObject) => {
    if (candyObject.mixed === true) {
        candyObject.baked = true
    } else {
        candyObject.baked = false
    }
}
let candyBaked = bakeCandy(candy)
// console.log(candy)

// 5. Break the hardened sheet into 6 pieces
const breakBark = (candyObject) => {
    if (candyObject.baked === true) {
        return ["Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece"]
    }
}
let breakCandy = breakBark(candy)
console.log(breakCandy)

// 6. 🍫 🍫 🍫 🍫 🍫 🍫 Enjoy!