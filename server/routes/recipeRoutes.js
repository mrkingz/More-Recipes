import express from 'express';
import RecipeController from './../controllers/recipeController';

const recipeRouter = express.Router();
recipeRouter.route('/api/v1/recipes')
  .post(RecipeController.createRecipe())
  .get(RecipeController.getRecipes());


recipeRouter.put(
  '/api/v1/recipes/:recipeId',
  RecipeController.updateRecipe()
);
export default recipeRouter;
