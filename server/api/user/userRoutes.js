var _ = require('lodash');
var userRouter = require('express').Router();

var KeyId = 0;

var UserList = [{
    FirstName: 'John',
    LastName: 'Miller'
}];


//find recipe by id middleware
userRouter.param('id', function(req, res, next, id) {
    var recipe = _.find(UserList, {ID: parseInt(id)});

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

userRouter.route('/')
    .get(function (req, res) {
        res.json(UserList);
    })
  
userRouter.use(function(err, req, res, next) {
    if (err) {
        console.log(err.message);
        res.status(500).send(err)
    }
})

module.exports = userRouter;