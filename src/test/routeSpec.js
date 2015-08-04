'use strict';

import superagent from  'supertest';
import app from '../app';

const restControllers = ['users', 'dogs', 'notes'];
const request = () => superagent(app.listen());

describe('Routes', () => {
  describe('GET /api/v1/', () => {
    it('should return 200', (done) => {
      request()
        .get('/api/v1/')
        .expect(200, done);
    });
  });
  describe('GET /api/v1/notfound', () => {
    it('should return 404', (done) => {
      request()
        .get('/api/v1/notfound')
        .expect(404, done);
    });
  });
  restControllers.forEach((restCtl) => {
    describe(`GET /api/v1/${restCtl}`, () => {
      it('should return 200', (done) => {
        request()
          .get(`/api/v1/${restCtl}`)
          .expect('Content-Type', /json/)
          .expect(200, done);
      });
    });
    describe(`GET /api/v1/${restCtl}/badrequest`, () => {
      it('should return 400', (done) => {
        request()
          .get(`/api/v1/${restCtl}/badrequest`)
          .expect(400, done);
      });
    });
    describe(`GET /api/v1/${restCtl}/-1`, () => {
      it('should return 404', (done) => {
        request()
          .get(`/api/v1/${restCtl}/-1`)
          .expect(404, done);
      });
    });
  });
});