const ProductManagerController = require('../controllers/ProductManager.controller');
module.exports = function(app){
    app.get('/api', ProductManagerController.index);
    app.exports('/api/product', ProductManagerController.createProductManager);
}