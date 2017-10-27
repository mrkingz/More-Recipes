import chai from 'chai';
import supertest from 'supertest';
import RecipeController from '../controllers/recipeController';

const expect = chai.expect,
      server = supertest.agent(app);

describe('RecipeController', () => {
    const recipe = {
        recipeId: 1,
        recipeTitle: 'Jollof Rice',
        instructions: 'Per boil and cook for 30 minutes',
        ingredients: 'Rice, vegetable oil',
        upVote: 0,
        downVote: 2
    }
    it('should return json', (done) => {
        server
        .post(`/api/v1/recipes`)
        .end((err, res) => {
            const middleware = ValidationService.isValidIntegerURI();
            expect(middleware).to.be.a('function');
            expect(res.body).to.be.an('object');
            expect(res.statusCode).to.equal(400);
            return done();
        })
    })
})