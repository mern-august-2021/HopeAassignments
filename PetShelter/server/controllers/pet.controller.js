const Pet  = require("../models/pet.model");

module.exports = {

    //find all

    findAllPets: (req, res) =>{
        console.log("All the Pets!");
        Pet.find({})
        .then((allPets) =>{
            res.json(allPets);
        })
        .catch((err) =>{
            console.log("Get all pets failed");
            res.status(400).json(err);
        })
    },

    //find one pet

    findOnePet: (req, res) => {
        Pet.findOne({_id: req.params.id})
        .then((onePet) => res.json(onePet))
        .catch((err) =>{
            console.log("Find One Pet failed");
            res.status(400).json(err);
        })
    },

    //create new pet

    createNewPet: (req, res) => {
        Pet.create(req.body)
        .then((newPet) =>
        res.json(newPet))
        .catch((err)=>{
            console.log("Create New Pet failed");
            res.status(400).json(err)
        })
    },



    //update Pet

    updatePet: (req, res) => {
        Pet.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            {new: true, runValidaators: true}
        )
            .then(updatedPet => res.json(updatedPet))
            .catch((err) => {
                console.log("Updated Pet failed");
                res.status(400).json(err)
            })
    },

    //delete Pet

    deletePet: (req, res) => {
        Pet.deleteOne({_id: req.params.id})
        .then((deletedPet) => res.json(deletedPet))
        .catch((err)=>{
            console.log("Deleted Pet failed");
            res.status(400).json(err)
        })
    }
}