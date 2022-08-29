// intro to Javascript -- web vs node, ECMA
// https://www.w3schools.com/js/js_versions.asp

// ------------- Hoisting -------------
console.log(cat)
var cat = "pepper";
console.log(cat);
// 1. declare the cat variable
// 2. assign the cat as "pepper" in line 7

//  ------------- const & let ------------
const food = "taco" // const: cannot be reassigned
let lunch = "sushi" // let: can be reassigned 

const skills = ["breaking the code", "fixing the bugs", "bootstrap"] // array/object : memory location
skills.push("Farming")
skills[0] = "cooking"
console.log(skills)

for(let i=0; i<5; i++){
    console.log(i)
}

// ------------- scope ------------
let myName = "Heidi"

function changeName(){
    let myName = "Pepper" // search for the variables inside local scope first, then global one. 
    myName = "Chen"
    console.log(myName)
}

changeName();
console.log(myName)



// ------------- destructuring ------------
// Creating variables from object/array
const person = { 
    firstName: 'Bob', 
    lastName: 'Marley', 
    email: 'bob@marley.com', 
    password: 'sekureP@ssw0rd9', 
    username: 'barley', 
    createdAt: 1543945177623,
    addresses: [
        {
          address: '1600 Pennsylvania Avenue',
          city: 'Washington, D.C.',
          zipcode: '20500',
        },
        {
          address: '221B Baker St.',
          city: 'London',
          zipcode: 'WC2N 5DU',
        }
      ],
};
const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];

console.log(person.firstName)
console.log(person["firstName"])

// const firstName = person.firstName
// const lastName = person.lastName

// for object, order doesn't matter
const {firstName, lastName, email, password :hashedPassword, username, nickname} = person // create firstName, lastName.....
// Step 1. creating hashedPassword 
// Step 2. find the person.password from the object
// Step 3. assign person.password into hashedPassword

console.log(hashedPassword)





// for arrays, order matters
const [ , , thirdAnimal] = animals
console.log(thirdAnimal)


// ------------- spread/rest ------------
const personCopy = { ...person, firstName:"Heidi", lastName:"Chen"}
console.log(personCopy)
console.log(person)

const animalsCopy = [...animals, "penguin"] // ["a", "b", "c"]
console.log(animalsCopy)
console.log(animals)

// ------------- arrow function ------------
const sayHello = function(name) {
    console.log('Hello ' + name);
  };

function sayHello2(name){
    console.log("Hello2 " + name)
}
// () => {}
// arrowFunction
const sayHelloArrow = (name) =>{
    console.log("hello => " + name)
}
sayHello("Pepper")
sayHello2("Heidi")
sayHelloArrow("Bob")

// normal function to return something
function changePrice(price, discount){
    return price * discount
}

// longhanded arrow 
const changePrice2 = (price, discount) =>{
    return price*discount
}

// shorthanded arrow with implicit return
const changePrice3 = (price, discount) => price*discount // no {} -> implicit return 

const changePrice4 = (price, discount) => (price*discount) // () -> implicit return 


console.log(changePrice(100, 0.8))
console.log(changePrice2(200, 0.8))
console.log(changePrice3(300, 0.8))
console.log(changePrice4(400, 0.8))

// ------------- More on destructuring ------------
const {addresses: [ {city:firstAddressCity}, secondAddress]} = person
console.log(firstAddressCity)

// ------------- ternary operator ------------
let rating = 8
if(rating > 5){
    console.log("This restaurant is great")
}else{
    console.log("This restaurant needs some improvement")
}

// (condition)?true-statement: else-statement
rating>5?
    console.log("This restaurant is great2"): 
    console.log("This restaurant needs some improvement2")

let likes = 100;  
rating>6 && likes>50 && console.log("Logical operator works")


