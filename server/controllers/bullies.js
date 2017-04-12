var mongoose = require('mongoose');
var Bully = mongoose.model('Bully');
module.exports = {
  show: function(req, res){
    Bully.find({}, function(err, bullies){
      res.render('index', {bullies: bullies});
    }).sort({num_reports: -1});
  },
  create: function(req, res){
    Bully.create(req.body, function(err, result){
      if(err){
        console.log(err);
      }
      else{
        res.redirect('/');
      }
    });
  },
  findbully: function(req, res){
    Bully.find({_id: req.params.id}, function(err, results){
      if(err){
        console.log(err);
      }
      else{
        console.log(results[0]);
        res.render('bully', {bully: results[0]});
      }
    });
  },
  edit: function(req, res){
    Bully.find({_id: req.params.id}, function(err, results){
      if(err){
        console.log(err);
      }
      else{
        res.render('edit.ejs', {bully: results[0]});
      }
    });
  },
  update: function(req, res){
    Bully.update(
      {_id: req.params.id},
      {name: req.body.name,
        age: req.body.age,
        type: req.body.type,
        $push: {reports: req.body.reports},
        $inc: {num_reports: 1}},
      function(err){
      if(err){
        console.log(err);
      }
      else{
        res.redirect('/');
      }
    });
  },
  destroy: function(req, res){
    Bully.remove({_id: req.params.id}, function(err){
      if(err){
        console.log(err);
      }
      else{
        res.redirect('/');
      }
    });
  }
}
