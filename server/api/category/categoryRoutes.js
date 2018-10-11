var _ = require('lodash');
var categoryRouter = require('express').Router();

var KeyId = 0;

var CategoryList = [{
    Name: 'Main meals',
    Description: 'Only main meals'
}];


//find recipe by id middleware
categoryRouter.param('id', function(req, res, next, id) {
    var recipe = _.find(CategoryList, {ID: parseInt(id)});

    if (recipe) {
        req.recipe = recipe;
        next();
    } else {
        res.send();
    }
})

//update key id middleware 
var updateId = function(req, res, next) {
    if (!req.body.id) {
        KeyId++;
        req.body.ID = KeyId 
    }
    next();
}

categoryRouter.route('/')
    .get(function (req, res) {
        res.json(CategoryList);
    })
  
categoryRouter.use(function(err, req, res, next) {
    if (err) {
        console.log(err.message);
        res.status(500).send(err)
    }
})

module.exports = categoryRouter;