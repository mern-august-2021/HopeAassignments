const Cartoon = require("../models/cartoon.model");

module.exports = {

    //get all documents from the "cartoons" collection
    //and return an array of "cartoon" documents(js objects)

    //find all

    findAllCartoons: (req, res) =>{
        console.log("All the Cartoons!");
        //use the model to connect to the collection and find/return all documents
        Cartoon.find({}) //find all documents. don't filter anything out
        .then((allCartoons) =>{
            res.json(allCartoons);
        })
        .catch((err)=>{
            console.log("Get all cartoons failed");
            res.status(400).json(err);
        })
    },

    //find One Cartoon

    findOneCartoon: (req, res) => {
        //id will come to us from the params/url/route call    /api/cartoons/:id
        Cartoon.findOne({_id: req.params.id})   
        .then((oneCartoon) => res.json(oneCartoon))
        .catch((err)=>{
            console.log("Find One Cartoon failed");
            res.status(400).json(err)
        })
    },

    //create new Cartoon

    createNewCartoon: (req, res) => {
        Cartoon.createNewCartoon(req.body)
        .then((newCartoon) =>
            res.json(newCartoon))
        .catch((err)=> {
            console.log("Create Cartoons failed");
            res.status(400).json(err)
        })
    },

    //update Cartoon

    updateCartoon: (req, res) => {
        Cartoon.findOneAndUpdate(
            //id will come to us from the params/url/route call    /api/cartoons/:id
            {_id: req.params.id},
            req.body,
            {new: true, runValidators: true}
        )
            .then(updatedCartoon => res.json(updatedCartoon))
            .catch((err) => {
                console.log("Updated Cartoon failed");
                res.status(400).json(err)
            })
    },

    //delete cartoon

    deleteCartoon: (req, res) => {
        //id will come to us from the params/url/route call    /api/cartoons/:id
        Cartoon.deleteOne({_id: req.params.id})
        .then((deletedCartoon) => res.json(deletedCartoon))
        .catch((err)=>{
            console.log("Deleted Cartoon failed");
            res.status(400).json(err)
        })
    }

}

//ALTERNATIVE WAY TO WRITE IN THE PLATFORM
//THEY HAVE MODULE.EXPORT.KEY_NAME FOR EVERY SINGLE METHOD
//I THINK THIS WAY IS EASIER, BUT THEY ARE ULTIMATELY THE SAME, SO DO WHAT FEELS GOOD!