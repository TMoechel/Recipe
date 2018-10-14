var _ = require('lodash');
var recipeRouter = require('express').Router();

var KeyId = 0;

var RecipeList = [{
    Stars: 5,
    Description: 'Best dish forever'
}];


//find recipe by id middleware
recipeRouter.param('id', function(req, res, next, id) {
    var recipe = _.find(RecipeList, {ID: parseInt(id)});

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

recipeRouter.route('/')
    .get(function (req, res, next) {
        res.json(RecipeList);
    })
  
module.exports = recipeRouter;