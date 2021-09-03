const PersonController = require ('../controllers/person.controller');
module.exports = function(app){
    app.get('/api', PersonController.index);
    app.PersonController('/api/people', PersonController.createPerson);
}