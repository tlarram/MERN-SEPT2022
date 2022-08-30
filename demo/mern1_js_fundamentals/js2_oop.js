// --------------- OOP ---------------
// Constructing a class - constructor & methods
class Developer{
    // attributes /member variable: what the class have
    constructor(name, health=100,braincell=10, skills=["technical skills", "computer hacking skills"]){
        this.name = name
        this.skill = skills
        this.health = health
        this.braincell = braincell
    }

    // methods: what the class can do
    coding(){
        console.log(`${this.name} is coding....`)
        this.braincell += 1;
        this.health -= 5;
        return this
    }

    sleep(){
        console.log(this.name + " is sleeping")
        this.braincell += 2;
        this.health += 10;
        return this
    }


}

// inheriting a class 
class JuniorDeveloper extends Developer{
    constructor(name){
        // to call the constructor of the parent
        super(name)
        this.excitementLevel = 10;
    }
}



// test case
const dev1 = new Developer("Heidi")
const dev2 = new Developer("Pepper", 50, 0, ["playing with the toy", "scratching people"])

console.log(dev1)
console.log(dev2)

dev1.coding().coding().coding()
console.log(dev1)

const junDev = new JuniorDeveloper("Alex Miller")
junDev.coding().coding().coding().coding().coding().coding().coding().coding().coding().coding()
console.log(junDev)