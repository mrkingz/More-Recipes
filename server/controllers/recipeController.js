
const recipes = [];
/**
 * @class RecipeController
 */
class RecipeController
{
  /**
   * @description Creates a new Recipe 
   * @static
   * @memberof RecipeController
   * @return {function} A middleware function that handles the POST request
   */
    static createRecipe()
    {
        return (req, res) => {
            recipes.push(req.body);
            res.status(201).json({
                success: true,
                message: 'Recipe successfully created',
                data: req.body
            })
        }
    }

  /**
   * @description Gets all recipes
   * @static
   * @memberof RecipeController
   * @returns {function} A middleware funtion that handles the GET request
   */
    static getRecipes()
    {
        return (req, res) => {
            if(!req.query.sort) {
                res.status(200).send(recipes);
            } else {
                const results = recipes.sort((a, b) => (b.upvote - a.upvote));
                res.status(200).send(results);   
            }
        }
    }
}
export default RecipeController;