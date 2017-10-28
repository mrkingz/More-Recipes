const review = [{
  reviewId: 1,
  recipeId: 1,
  userId: 1,
  comment: 'Nice recipe, bro! Feeling so yummy already...',
}];

const recipes = [{
  recipeId: 1,
  recipeTitle: 'Jollof Rice and chicken',
  instructions: 'Per boil and cook for 30 minutes',
  ingredients: 'Rice, vegetable oil',
  upvote: 10,
  downvote: 3
}, {
  recipeId: 2,
  recipeTitle: 'Rice and plantain',
  instructions: 'Per boil and cook for 30 minutes',
  ingredients: 'Rice, vegetable oil',
  upvote: 17,
  downvote: 6
}, {
  recipeId: 3, 
  recipeTitle: 'Jollof Rice and beans',
  instructions: 'Per boil and cook for 30 minutes',
  ingredients: 'Rice, vegetable oil',
  upvote: 2,
  downvote: 9
}];

/**
 * @class RecipeController
 */
export default class RecipeController {
  /**
   * @description Creates a new Recipe
   * @static
   * @memberof RecipeController
   * @return {function} A middleware function that handles the POST request
   */
  static createRecipe() {
    return (req, res) => {
      recipes.push(req.body);
      res.status(201).json({
        status: 'success',
        message: 'Recipe successfully created',
        data: req.body
      });
    };
  }

  /**
   * @description Gets all recipes
   * @static
   * @memberof RecipeController
   * @returns {function} A middleware funtion that handles the GET request
   */
  static getRecipes() {
    return (req, res) => {
      if (!req.query.sort) {
        res.status(200).json(recipes);
      } else {
        const results = recipes.sort((a, b) => (b.upvote - a.upvote));
        res.status(200).json(results);
      }
    };
  }

  /**
   * @description Updates a recipe
   * @static
   * @memberof RecipeController
   * @returns {Function} A middleware funtion that handles the PUT request
   */
  static updateRecipe() {
    return (req, res) => {
      let notFound = true;
      for (let i = 0; i < recipes.length; i += 1) {
        if (parseInt(recipes[i].recipeId, 10) === parseInt(req.params.recipeId, 10)) {
          recipes[i].recipeTitle = req.body.recipeTitle || recipes[i].recipeTitle;
          recipes[i].ingredients = req.body.ingredients || recipes[i].ingredients;
          recipes[i].instructions = req.body.instructions || recipes[i].instructions;
          recipes[i].upVote = req.body.upVote || recipes[i].upVote;
          recipes[i].downVote = req.body.downVote || recipes[i].downVote;
          notFound = false;
          res.status(200).send({
            status: 'success',
            message: 'recipe successfully edited.',
            data: recipes[i]
          });
        }
      }

      if (notFound) {
        res.status(404).json({
          status: 'fail',
          message: 'recipe not found'
        });
      }
    };
  }

  /**
   * @description Deletes a recipe
   * @static
   * @memberof RecipeController
   * @returns {Function} A middleware funtion that handles the delete request
   */
  static deleteRecipe() {
    return (req, res) => {
      let notFound = true;
      for (let i = 0; i < recipes.length; i += 1) {
        if (parseInt(recipes[i].recipeId, 10) === parseInt(req.params.recipeId, 10)) {
          recipes.splice(i, 1);
          notFound = false;
        }
      }

      res.status(200).json({
        status: (notFound) ? 'fail' : 'success',
        message: (notFound) ? 'Recipe does not exist' : 'recipe successfully delete'
      });
    };
  }

  /**
   * @description Post a review on a recipe
   * @static
   * @memberof RecipeController
   * @returns {Function} A middleware funtion that handles the Post request
   */
  static postReview() {
    return (req, res) => {
      let found = false;
      for (let i = 0; i < recipes.length; i += 1) {
        if (parseInt(recipes[i].recipeId, 10) === parseInt(req.params.recipeId, 10)) {
          found = true;
          break;
        } else {
          return res.status(404).send({
            status: 'fail',
            message: 'Recipe does not exist',
          });
        }
      }

      if (found) {
        review.push(req.body);
        res.status(201).send({
          status: 'success',
          message: 'Review successfully posted',
          data: req.body
        });
      }
    };
  }
}
