const { response } = require('express');
const ProductManager = require('../models/ProductManager.model');

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

module.exports.createProductManager = (request, response) => {
    const { title, price, description } = request.body;
    ProductManager.create({
        title,
        price,
        description
    })
        .then(ProductManager => response.json(ProductManager))
        .catch(err => response.json(err));
}