const mongoose = require ("mongoose");

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "A pet name is required!"],
        minLength: [3, "A pet's name must be at least three characters long!"]
    },

    image: {
        type: String,
        required: [true, "A pet image is required!"],
    },

    type: {
        type: String,
        required: [true, "A pet type is required!"],
        minLength: [3, "A pet type must be at least three characters long!"]
    },

    description: {
        type: String,
        required: [true, "A pet description is required!"],
        minLength: [3, "A pet description must be at least three characters long!"]
    },

    skillOne: {
        type: String
    },

    skillTwo: {
        type: String
    },

    skillThree: {
        type: String
    },
    
}, {timestamps:true})

    const Pet = mongoose.model("Pet", PetSchema);

module.exports = Pet;