const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: [true, "Title cannot be empty"] ,
        minlength: [3, "{PATH} must be at least {MINLENGTH} characters long"]
    },
    company: { 
        type: String, 
        required: [true, "{PATH} cannot be empty"] ,
        minlength: [3, "{PATH} must be at least {MINLENGTH} characters long"]
    },
    salary: { 
        type: Number,
        min: [70000, "{PATH} cannot be less than {MIN}"] 
    },
    isRemote: { 
        type: Boolean
    },
}, { timestamps: true });

module.exports.Job = mongoose.model('Job', JobSchema);