import chai from 'chai';
import supertest from 'supertest';
import app from '../../app';

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
  };
  it('should return json', (done) => {
    server
      .post('/api/v1/recipes')
      .send(recipe)
      .end((err, res) => {
        expect(res).to.be.an('object');
        expect(res.statusCode).to.equal(201);
        return done();
      });
  });
  it('should get recipes as json', (done) => {
    server
      .get('/api/v1/recipes')
      .send(recipe)
      .end((err, res) => {
        expect(res).to.be.an('object');
        expect(res.statusCode).to.equal(200);
        return done();
      });
  });
  it('should update a recipe', (done) => {
    const update = {
      recipeId: 1,
      recipeTitle: 'Jollof rice and beans'
    };
    server
      .put('/api/v1/recipes/1')
      .send(update)
      .end((err, res) => {
        expect(res).to.be.an('object');
        expect(res.statusCode).to.equal(200);
        return done();
      });
  });
});
