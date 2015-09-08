import superagent from  'supertest';
import app from '../app';
import db from '../db/db';

const request = () => superagent(app.listen());

describe('Dog', () => {
  describe('GET /api/v1/dogs', () =>
    it('should have no dogs', done => {
      request()
        .get('/api/v1/dogs')
        .end((err, res) => {
          if (err) { return done(err); }
          if (res.body.length !== 0) { return done(new Error('should be zero')); }
          done();
        })
    })
  );
});