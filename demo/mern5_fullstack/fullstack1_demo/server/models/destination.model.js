const mongoose = require('mongoose');
 
const DestinationSchema = new mongoose.Schema({
    location: {
        type: String,
        required : [true, "Location is required"],
        minlength : [3, "Location must be at least 3 characters long"]
    },
    rating : {
        type: Number,
        required : [true, "rating is required"],
        min: [1, "Rating must be between 1-10"],
        max: [10, "Rating must be between 1-10"]
    },
    image : {
        type: String,
        required : [true, "Image is required"]
    },
    season: {
        type: String,
        required : [true, "Season is required"]   
    },
}, {timestamps: true});
 
const Destination = mongoose.model('Destination', DestinationSchema);
 
// option 1: export the whole file as Destination model
module.exports = Destination;

// option 2: export the whole file as an object, with Destination as the key/value
// module.exports = {Destination: Destination}
// module.exports.Destination = mongoose.model('Destination', DestinationSchema);