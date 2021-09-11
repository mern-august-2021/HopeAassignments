const ProductManagerController = require('../controllers/ProductManager.controller');
module.exports = function(app){
    app.get('/api', ProductManagerController.index);
    app.post('/api/product', ProductManagerController.createProductManager);
    app.get('/api/product', ProductManagerController.getAllProducts);
    app.get('/api/product/:id', ProductManagerController.getProducts);
    app.put('/api/product/:id', ProductManagerController.updateProducts);
    app.delete('/api/product/:id', ProductManagerController.deleteProduct);
}