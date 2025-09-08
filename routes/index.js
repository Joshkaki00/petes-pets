const Pet = require('../models/pet');

module.exports = (app) => {
  /* GET home page. */
  app.get('/', (req, res) => {
    const page = req.query.page || 1

    Pet.paginate({}, {page: page, limit: 3}).then((results) => {
      res.render('pets-index', { 
        pets: results.docs, 
        pagesCount: results.totalPages, 
        currentPage: page 
      });    
    });
  }); 
}
