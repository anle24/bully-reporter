var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var path = require('path')
var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, './client/static')));
//
// mongoose.connect('mongodb://localhost/mongoose_dashboard')

// var BullySchema = new mongoose.Schema({
//   name: {type: String, required: true},
//   age: {type: Number, required: true},
//   type: {type: String, required: true},
//   reports: {type: Array, required: true},
//   num_reports: {type: Number, default: 1}
// }, {timestamps: true});
//
// var Bully = mongoose.model('bullies', BullySchema);

app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

// REQUIRE MONGOOSE config
require('./server/config/mongoose.js');

// SETTING UP ROUTES
var routes_setter = require('./server/config/routes.js');
routes_setter(app);

// app.get('/', function(req, res){
//   Bully.find({}, function(err, bullies){
//     res.render('index', {bullies: bullies});
//   }).sort({num_reports: -1})
// });
//
// app.get('/bullies/new', function(req, res){
//   res.render('new');
// })
//
// app.post('/bullies', function(req, res){
//   Bully.create(req.body, function(err, result){
//     if(err){
//       console.log(err);
//     }
//     else{
//       res.redirect('/');
//     }
//   });
// });
//
// app.get('/bullies/:id', function(req, res){
//   Bully.find({_id: req.params.id}, function(err, results){
//     if(err){
//       console.log(err);
//     }
//     else{
//       console.log(results[0]);
//       res.render('bully', {bully: results[0]});
//     }
//   });
// });
//
// app.get('/bullies/edit/:id', function(req, res){
//   Bully.find({_id: req.params.id}, function(err, results){
//     if(err){
//       console.log(err);
//     }
//     else{
//       res.render('edit.ejs', {bully: results[0]});
//     }
//   });
// });
//
// app.post('/bullies/:id', function(req, res){
//   Bully.update(
//     {_id: req.params.id},
//     {name: req.body.name,
//       age: req.body.age,
//       type: req.body.type,
//       $push: {reports: req.body.reports},
//       $inc: {num_reports: 1}},
//     function(err){
//     if(err){
//       console.log(err);
//     }
//     else{
//       res.redirect('/');
//     }
//   });
// });
//
// app.get('/bullies/destroy/:id', function(req, res){
//   Bully.remove({_id: req.params.id}, function(err){
//     if(err){
//       console.log(err);
//     }
//     else{
//       res.redirect('/');
//     }
//   });
// });

app.listen(8000);
