// temp database
const users = [
    { firstName: "Reimu", lastName: "Hakurei" }, // 0
    { firstName: "Marisa", lastName: "Kirisame" }, // 1
    { firstName: "Sanae", lastName: "Kochiya" }, // 2
    { firstName: "Sakuya", lastName: "Izayoi" }, // 3
    { firstName: "Momiji", lastName: "Inubashiri" } // 4
];

module.exports = {
    testing : (req, res) =>{
        res.json({ message: "Hello world" })
    },
    allUsers : (req, res) => {
        res.json(users)
    },
    oneUser : (req, res) => {
        const userId = req.params.id
        res.json(users[userId])
    },
    createUser : (req, res) =>{
        const newUser = req.body
        users.push(newUser)
        res.json(newUser)
    },
    updateUser : (req, res) =>{
        const userId = req.params.id
        const updatedData = req.body
        users[userId] = updatedData
        res.json(users[userId])
    },
    deleteUser : (req, res) =>{
        const userId = req.params.id
        users.splice(userId, 1)
        res.json({ status: "ok" })
    }
    
}