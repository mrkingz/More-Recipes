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

recipeRouter.post(
  '/api/v1/recipes/:recipeId/reviews',
  RecipeController.postReview()
);

recipeRouter.delete(
  '/api/v1/recipes/:recipeId',
  RecipeController.deleteRecipe()
);
export default recipeRouter;
