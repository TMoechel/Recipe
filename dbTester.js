var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/recipeDB');

var RecipeSchema = new mongoose.Schema({
    name: String,
    description: String,
    cookingTime: Number
});

var CategorySchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      unique: true
    },
    description: String,
  });

var RecipeModel = mongoose.model('recipe', RecipeSchema);
var CategoryModel = mongoose.model('category', CategorySchema);

CategoryModel.create({
    name: 'Soups',
    description: "Asian soups",
 }).then(function(err, category){
 }).then(function(err, category){
     console.log(err, category)
 });
 

// RecipeModel.create({
//    name: 'Tom Ka Gai',
//    description: "Use a lot of Coconut milk",
//    cookingTime: 25 
// }).then(function(err, recipe){
// }).then(function(err, recipe){
//     console.log(err, recipe)
// });

