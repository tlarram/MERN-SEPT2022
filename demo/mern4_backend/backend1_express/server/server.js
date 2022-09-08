// import express
const express = require("express") // import express from "express"
const app = express()
const port = 8000

// configure express to allow post/put
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


// temp database
const users = [
    { firstName: "Reimu",  lastName: "Hakurei"    }, // 0
    { firstName: "Marisa", lastName: "Kirisame"   }, // 1
    { firstName: "Sanae",  lastName: "Kochiya"    }, // 2
    { firstName: "Sakuya", lastName: "Izayoi"     }, // 3
    { firstName: "Momiji", lastName: "Inubashiri" } // 4
];

// testing routes
app.get("/api/testing", (req, res)=>{
    res.json({message: "Hello world"})
})

// get all
app.get("/api/users", (req, res)=>{
    res.json(users)
})

// get one
app.get("/api/users/:id" , (req, res)=>{
    const userId = req.params.id
    res.json(users[userId])
})

// create
app.post("/api/users", (req, res)=>{
    const newUser = req.body
    users.push(newUser)
    res.json(newUser)
})

// update  -- getOne + create
app.put("/api/users/:id", (req, res)=>{
    const userId = req.params.id
    const updatedData = req.body
    users[userId] = updatedData
    res.json(users[userId])
})

// delete
app.delete("/api/users/:id", (req, res)=>{
    const userId = req.params.id
    users.splice(userId, 1)
    res.json({status : "ok"})
})




app.listen( port, () => console.log(`Listening on port: ${port}`) );