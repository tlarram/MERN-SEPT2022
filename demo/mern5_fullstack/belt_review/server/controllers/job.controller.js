const {Job} = require('../models/job.model')

// TEST ROUTES
module.exports.index = (req, res) => {
    res.json({message: "Hello World"});
}

// GET ALL
module.exports.allJobs = (req, res) => {
    Job.find()
        .then(allJobs=>res.json(allJobs))
        .catch(err=>res.status(400).json(err))
}

// GET ONE
module.exports.oneJob = (req, res) => {
    Job.findOne({_id: req.params.id})
        .then(oneJob=>res.json(oneJob))
        .catch(err=>res.status(400).json(err))
}

// CREATE
module.exports.addJob = (req, res) => {
    Job.create(req.body)
        .then(newJob=>res.json(newJob))
        .catch(err=>res.status(400).json(err))
}

// UPDATE
module.exports.updateJob = (req, res) => {
    Job.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new:true}
    )
        .then(updatedJob=>res.json(updatedJob))
        .catch(err=>res.status(400).json(err))
}

// DELETE
module.exports.deleteJob = (req, res) => {
    Job.deleteOne({_id: req.params.id})
        .then(status=>res.json(status))
        .catch(err=>res.status(400).json(err))
}
