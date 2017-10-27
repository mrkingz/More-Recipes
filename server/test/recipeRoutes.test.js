import chai from 'chai';
import supertest from 'supertest';
import RecipeController from '../controllers/recipeController';
import app from '../../app.js';

const expect = chai.expect,
      server = supertest.agent(app);

describe('RecipeRoute', () => {
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
        .send(recipe)
        .end((err, res) => {
            expect(res).to.be.an('object');
            expect(res.statusCode).to.equal(201);
            return done();
        })
    })
    it('should return json', (done) => {
        server
        .get(`/api/v1/recipes`)
        .send(recipe)
        .end((err, res) => {
            expect(res).to.be.an('object');
            expect(res.statusCode).to.equal(200);
            return done();
        })
    })
})