// const DemoController = require("./../controllers/demo.controller")
const DemoController = require("./../controllers/demo2.controller")


module.exports = (app) => {
    app.get("/api/testing", DemoController.testing)
    app.get("/api/users", DemoController.allUsers)
    app.get("/api/users/:id", DemoController.oneUser)
    app.post("/api/users", DemoController.createUser)
    app.put("/api/users/:id", DemoController.updateUser)
    app.delete("/api/users/:id", DemoController.deleteUser)

}
