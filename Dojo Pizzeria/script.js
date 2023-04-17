// function pizzaOven(crustType, sauceType, cheeses, toppings) {
//     var pizza = {}
//     pizza.crustType = crustType
//     pizza.sauceType = sauceType
//     pizza.cheeses = cheeses
//     pizza.toppings = toppings
//     return pizza
// }

// var pizza1 = pizzaOven("deep dish", "traditional", ["mozzerella"], ["pepperoni", "sausage"])
// var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzerella", "feta"], ["mushrooms", "olives", "onions"])
// var pizza3 = pizzaOven("cauliflower", "marinara", ["6-cheese blend"], ["pineapple", "banana pepper"])
// var pizza4 = pizzaOven("thin", "alfredo", ["mozzerella"], ["chicken", "spinach"])

// console.log(pizza1)
// console.log(pizza2)
// console.log(pizza3)
// console.log(pizza4)

// function randomPizza() {

//     var crust = ["regular", "thin", "deep dish", "cauliflower", "flat bread"]
//     var sauce = ["regular", "spicy", "alfredo", "pesto", "bufalo", "BBQ"]
//     var cheeses = ["mozzarella", "provolone", "cheddar", "parmesan", "gouda", "goat", "gruyere", "ricotta"]
//     var toppings = ["pepperoni", "mushrooms", "onions", "sausage", "black olives", "green peppers", "pineapple", "spinach", "banana peppers"]

//     var pizza = {}

//     pizza.crust = crust[Math.floor(Math.random() * crust.length)]
//     pizza.sauce = sauce[Math.floor(Math.random() * sauce.length)]
//     pizza.cheese = cheeses[Math.floor(Math.random() * cheeses.length)]
//     pizza.topping = toppings[Math.floor(Math.random() * toppings.length)]

//     return pizza
// }

// console.log(randomPizza())

var crustTypes = [
    "deep dish",
    "hand tossed",
    "thin and crispy",
    "cauliflower",
    "gluten free",
    "hawaiian bread"
];

var sauceTypes = [
    "traditional",
    "marinara",
    "bbq",
    "white sauce",
    "nacho cheese",
    "tikka masala"
];

var cheeses = [
    "mozzarella",
    "cheddar",
    "feta",
    "swiss cheese",
    "blue cheese",
    "goat cheese",
    "provolone",
    "parmesan",
    "vegan cheese"
];

var toppings = [
    "pepperoni",
    "sausage",
    "chicken",
    "corn",
    "olives",
    "bell peppers",
    "onions",
    "mushrooms",
    "anchovies"
];

function randomRange(max, min) {
    return Math.floor(Math.random() * max - min) + min;
}

function randomPick(arr) {
    var i = Math.floor(arr.length * Math.random());
    return arr[i];
}

function randomPizza() {
    var pizza = {};
    pizza.crustType = randomPick(crustTypes);
    pizza.sauceType = randomPick(sauceTypes);
    pizza.cheeses = [];
    pizza.toppings = [];
    for (var i = 0; i < randomRange(5, 1); i++) {
        pizza.cheeses.push(randomPick(cheeses));
    }
    for (var i = 0; i < randomRange(4, 0); i++) {
        pizza.toppings.push(randomPick(toppings));
    }
    return pizza;
}

console.log(randomPizza());