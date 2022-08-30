// ------ callback functions -------

const makingPurchase = (person, price) =>{ 
    console.log(`Processing purchase for ${person}, charged ${price}`)
}

const returningItem = (person, price) =>{
    console.log(`Processing refund for ${person}, ${price} will be issued at ${person}'s bank account`)
}

const parentFunction = (person, price, fx) => {
    console.log("Welcome to the store")
    fx(person, price)
}

parentFunction("Alex Miller", 200, returningItem)

parentFunction("Alex Miller", 200, makingPurchase)


// ------ Object.freeze() -------
const shoppingList = Object.freeze([
    {id: 3, item: "Pepper's food", price: 1.29, shops: ["petco", "amazon"], required: true}, // shoppingList[0]
    {id: 5, item: "red gamer chair", price: 200, shops: ["amazon", "BestBuy"], required: false}, // shoppingList[1]
    {id: 9, item: "soup dumplings", price: 3.29, shops: ["99 ranch" , "Trader Joes"], required: true},  // shoppingList[2]
    {id: 2, item: "Air ticket to Japan", price: 800, shops: ["expedia"], required: false},  // shoppingList[3]
    {id: 10, item: "custard tart", price: 3.99, shops: ["Trader Joes"], required: true}      // shoppingList[4]
])


// ------ .map & .filter -------
// --- .map() ---
// DEMO: return an array of prices
const prices = shoppingList.map((eachItem) => eachItem.price) // loop through the array and grab all the returned item, then form an array 
console.log(prices)

// TODO: return a list of item names



// --- .filter() ---
// DEMO: return a list of cheap items (cheap: price< 100)
const cheapItems = shoppingList.filter((eachItem)=> eachItem.price<100 )
// console.log(cheapItems) 


// DEMO: return a list of cheap items with only the names
const cheapItemsNames = shoppingList
                            .filter((eachItem)=> eachItem.price < 100)
                            .map((whatever) => whatever.item)
// console.log(cheapItemsNames)


// TODO: given a deleteId, return a list of items without the item of that matching id 



// TODO: given an array index, return a list of items without the item of that index 



// TODO: filter the items that can be bought in Trader Joes 
// HINT: .includes(keyword) returns a boolean 


// ------ The big Freeze (More built-in functions for object & array)  -------
// -- arr.push alternative 1 : concat (glue 2 arrays together) --
const campingList = [
    {id: 20, item: "RV", price: 50000, shops: ["Camping world", "Craigslist"], required: true},
    {id: 21, item: "tent", price: 500, shops: ["Craigslist"], required: true}
]
const shoppingListWithRV = shoppingList.concat(campingList)
console.table(shoppingListWithRV)
// -- arr.push alternative 2 : spread (create an array with ...arr) --
const shoppingListWithTV = [ ...shoppingList ,{id: 15, item: "TV", price: 599, shops: ["amazon", "BestBuy"], required: false} ]
console.table(shoppingListWithTV)

// -- slice : return a portion of the array --
const deleteArrIdx2 = 2
const first2Items = [ ...shoppingList.slice(0,deleteArrIdx2), ...shoppingList.slice(deleteArrIdx2+1)]
console.table(first2Items)

// -- splice vs slice (splice: remove the element, slice: return a portion) --
const array=[1,2,3,4,5];
console.log(array.splice(1, 2)) // delete 2 elements from array[1]
console.log(array)

const array2=[1,2,3,4,5]
console.log(array2.slice(1,2)); // starting at 1, ends at 2
console.log(array2)


// -- Sorting --
console.table(cheapItemsNames)
const sortedNames = cheapItemsNames.sort()
console.table(sortedNames)

console.log(prices)
const sortedPrice = prices.sort((a, b) => a-b)
console.log(sortedPrice)


const sortedByPrice = [...shoppingList].sort((a, b)=> a.price > b.price? 1: -1)
console.table(sortedByPrice)
