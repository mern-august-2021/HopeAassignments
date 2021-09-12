const mongoose = require ("mongoose");

const CartoonSchema = new mongoose.Schema({
    name: {
        type: String,
        //validations
        required: [true, "A cartoon name is required!"],
        minLength: [5, "A cartoon name must be at least five characters long!"]
    },
    imgage: {
        type: String,
        //validations
        required: [true, "Because we love pictures, you must add one!"],
    },
    genre:{
        type: String,
        //validations
        required: [true, "Cartton genre required"],
        //enum will allow us to limit the answers to specific strings 
        //test the enum with a previous assignment
        enum: [
            "Anime",
            "Comedy",
            "Drama",
            "Action",
            "Children",
            "Mystery",
            "Horror",
            "Comic",
            "Parody"
        ]
    },
    era: {
        type: Number,
        //validations
        required: [true, "A cartoon era is required!"],
        //enum will allow us to limit the answers to specific strings 
        //test the enum with a previous assignment
        enum: [
            1920,
            1930,
            1940,
            1950,
            1960,
            1970,
            1980,
            1990,
            2000,
            2010,
            2020
        ]
    },
    //this is optional because not required
    rating: {
        type: Number,
        min:[0, 'Nees to be more than 0!'],
        max:[10, 'No more than 10!']
    },
    sutibleForKids: {
        type: Boolean
    }

}, {timestamps:true})
    //timestamps automatically create "createdAt" and "updatedAt" date and time for each document.
    //everytime a doc is updated, it will change the "updatedAt"

    //Model is a combination of the 1. collectionName and 2. Schema
    //Name will be collection name that's held in the db
    //schema is going to be the singular of what will show as plural in the db
    const Cartoon = mongoose.model("Cartoon", CartoonSchema);
    //This returns a cartoon model with the collection name and that schema

module.exports = Cartoon;
