
const recipes = [];
/**
 * @class RecipeController
 */
class RecipeController
{
    static createRecipe()
    {
        return (req, res) => {
            recipes.push(req.body);
            res.status(201).send({
                success: true,
                message: 'Recipe successfully created',
                data: req.body
            })
        }
    }
}
export default RecipeController;