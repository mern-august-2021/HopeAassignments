const Author = require("../models/author.model");

module.exports ={

    //find all

    findAllAuthors: (req, res) =>{
        console.log("All the Authors!");
        Author.find({})
        .then((allAuthors) =>{
            res.json(allAuthors);
        })
        .catch((err) =>{
            console.log("Get all authors failed");
            res.status(400).json(err);
        })
    },

    //find one author

    findOneAuthor: (req, res) =>{
        Author.findOne({_id: req.params.id})
        .then((oneAuthor) => res.json(oneAuthor))
        .catch((err) =>{
            console.log("Find One Author failed")
            res.status(400).json(err);
        })
    },

    //create new author

    createNewAuthor: (req, res) =>{
        Author.create(req.body)
        .then((newAuthor) =>
        res.json(newAuthor))
        .catch((err) =>{
            console.log("Create New Author failed")
            res.status(400).json(err)
        })
    },

    //update author

    updateAuthor: (req, res) => {
        Author.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            {new: true, runValidatores: true}
        )
            .then(updatedAuthor => res.json(updatedAuthor))
            .catch((err) => {
                console.log("Updated Author failed")
                res.status(400).json(err)
            })
    },

    //delete author

    deleteAuthor: (req, res) =>{
        Author.deleteOne({_id: req.params.id})
        .then((deletedAuthor) => res.json(deletedAuthor))
        .catch((err)=>{
            console.log("Deleted Author failed");
            res.status(400).json(err)
        })
    }
}