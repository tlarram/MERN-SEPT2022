const Destination = require("./../models/destination.model")

module.exports.testApi = (req, res) => {
    res.json({ Status: "ok" })
}


// get all
module.exports.allDest = (req, res) => {
    Destination.find()
        .then(allDest => res.json(allDest))
        .catch(err => res.json(err))
}

// get one
module.exports.oneDest = (req, res) => {
    const paramsId = req.params.id
    Destination.findOne({ _id: paramsId })
        .then(dest => res.json(dest))
        .catch(err => res.json(err))
}

// create
module.exports.addDest = (req, res) => {
    const newDest = req.body
    Destination.create(newDest)
        .then(dest => res.json(dest))
        .catch(err => res.json(err))
}

// update -- getOne + create
module.exports.updateDest = (req, res) => {
    const paramsId = req.params.id
    const updatedDest = req.body
    Destination.findOneAndUpdate(
        {_id: paramsId}, // criteria
        updatedDest, // update info
        {new: true, runValidators: true}
        // new : true --> return the updated object 
        // runValidation --> to run validations
    )
        .then(updatedDest => res.json(updatedDest))
        .catch(err => res.json(err))
 

}

// delete
module.exports.deleteDest = (req, res) => {
    Destination.findOneAndDelete({_id: req.params.id})
        .then(deletedDest=> res.json(deletedDest))
        .catch(err => res.json(err))
}