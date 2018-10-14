var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/recipeDB');

var recipeSchema = new mongoose.Schema({
    name: String,
    description: String,
    cookingTime: Number
});

var Recipe = mongoose.model('recipe', recipeSchema);

Recipe.create({
   name: 'Tom Ka Gai',
   description: "Use a lot of Coconut milk",
   cookingTime: 25 
}).then(function(err, recipe){
}).then(function(err, recipe){
    console.log(err, recipe)
});

