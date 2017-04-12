var bullies = require('../controllers/bullies.js');

module.exports = function(app){
  app.get('/', function(req, res){
    bullies.show(req, res)
  })

  app.get('/bullies/new', function(req, res){
    res.render('new');
  })

  app.post('/bullies', function(req, res){
    bullies.create(req, res)
  })

  app.get('/bullies/:id', function(req, res){
    bullies.findbully(req, res)
  })

  app.get('/bullies/edit/:id', function(req, res){
    bullies.edit(req, res)
  })

  app.post('/bullies/:id', function(req, res){
    bullies.update(req, res)
  })

  app.get('/bullies/destroy/:id', function(req, res){
    bullies.destroy(req, res)
  })
}
