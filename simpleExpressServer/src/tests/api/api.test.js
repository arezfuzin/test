/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../../app');

describe('movies api', () => {
    let server;
    let agent;

    beforeEach((done) => {
        server = app.listen(3001, (err) => {
            if (err) return done(err);

            agent = request.agent(server);
            return done();
        });
    });

    afterEach((done) => server && server.close(done));

    it('should get all movies base on search and page', (done) => {
        agent
            .get('/search?film=batman&page=1')
            .set({ 'x-api-key': 'test' })
            .expect(({ body }) => {
                expect(typeof body.movies).toBe('object');
            })
            .expect(200)
            .end(done);
    });

    it('should get detail movie base on title', (done) => {
        agent
            .get("/detail?title='Batman Begins'")
            .set({ 'x-api-key': 'test' })
            .expect(({ body }) => {
                expect(body.movie.Title).toEqual('Batman Begins');
            })
            .expect(200)
            .end(done);
    });

    it('should get error no authorize', (done) => {
        agent
            .get('/search?film=batman&page=1')
            .expect(({ body }) => {
                expect(body.message).toEqual('You not have access to do this action !');
            })
            .expect(401)
            .end(done);
    });
});
