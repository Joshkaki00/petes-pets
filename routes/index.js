const Pet = require('../models/pet');

module.exports = (app) => {
  /* GET home page. */
  app.get('/', (req, res) => {
    Pet.find()
      .then(pets => {
        res.render('pets-index', { pets: pets });
      })
      .catch(err => {
        console.error(err);
        res.status(500).send('Error fetching pets');
      });
  });
}
