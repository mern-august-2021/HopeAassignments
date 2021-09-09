
const ProductManager = require('../models/ProductManager.model');

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

module.exports.getAllProducts = (request, response) => {
    ProductManager.find({})
        .then(products => response.json(products))
        .catch(err => response.json(err))
}

module.exports.getProducts = (request, response) => {
    ProductManager.findOne({_id:request.params.id})
    .then(products => response.json(products))
    .catch(err => response.json(err))
}

module.exports.createProductManager = (request, response) => {
    const { title, price, description } = request.body;
    ProductManager.create({
        title,
        price,
        description
    })
        .then(newProduct => response.json(newProduct))
        .catch(err => response.json(err));
}