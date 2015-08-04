'use strict';

import superagent from  'supertest';
import app from '../app';

function request() {
  return superagent(app.listen());
}

describe('Routes', function() {
  describe('GET /api/v1/', function() {
    it('should return 200', function(done) {
      request()
        .get('/api/v1/')
        .expect(200, done);
    });
  });
  // describe('GET /books', function() {
  //   it('should return 200', function(done) {
  //     request()
  //       .get('/books')
  //       .expect('Content-Type', /json/)
  //       .expect(200, done);
  //   });
  // });
  // describe('GET /books/notfound', function() {
  //   it('should return 404', function(done) {
  //     request()
  //       .get('/books/notfound')
  //       .expect(404, done);
  //   });
  // });
});