
const recipes = [];
/**
 * @class RecipeController
 */
class RecipeController {
  /**
   * @description Creates a new Recipe
   * @static
   * @memberof RecipeController
   * @return {function} A middleware function that handles the POST request
   */
  static createRecipe() {
    return (req, res) => {
      //req.body.recipeId = recipes.length + 1;
      recipes.push(req.body);
      res.status(201).json({
        success: true,
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
        res.status(200).send(recipes);
      } else {
        const results = recipes.sort((a, b) => (b.upvote - a.upvote));
        res.status(200).send(results);
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
        if (recipes[i].recipeId === req.params.recipeId) {
          recipes[i].recipeTitle = req.body.recipeTitle || recipes[i].recipeTitle;
          recipes[i].ingredients = req.body.ingredients || recipes[i].ingredients;
          recipes[i].instructions = req.body.instructions || recipes[i].instructions;
          recipes[i].upVote = req.body.upVote || recipes[i].upVote;
          recipes[i].downVote = req.body.downVote || recipes[i].downVote;
          notFound = false;
          res.status(200).send({
            success: true,
            message: 'recipe successfully edited.',
            data: recipes
          });
        }
      }
      if (notFound) {
        res.status(404).json({
          success: false,
          message: 'recipe not found'
        });
      }
    };
  }
}
export default RecipeController;
