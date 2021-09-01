const Jokes = require("../models/jokes.model");

module.exports = {

    findAllJokes: (req, res) =>{
        console.log("All the Jokes!");
        Jokes.find({})
        .then((allJokes) => {
            res.json(allJokes);
        })
        .catch((err) =>{
            console.log("Get all jokes failed");
            console.log(err);
        })
    },

    findOneJoke: (req, res) =>{
        Jokes.findOne({_id: req.params.id})
        .then((oneJoke)=>res.json(oneJoke))
        .catch((err)=>status.error(err))
    },

    createNewJoke: (req, res) =>{
        Jokes.create(req.body)
        .then((newJoke)=>res.json(newJoke))
        .catch((err)=>status.error(err))
    },

    updateJoke: (req, res) =>{
        Jokes.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            {new: true}
        )
            .then(updateJoke => res.json({joke: updateJoke}))
            .catch(err => res.json({message: "Something went wrong", err}))
    },

    deleteJoke: (req, res)=>{
        Jokes.deleteOne({_id: req.params.id})
        .then((deleteJoke) => res.json({deleted: deleteJoke}))
        .catch((err)=> res.json({message: "Errors in deleteJoke", err}))
    }

}