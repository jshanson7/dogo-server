import request from './utils/request';

const endpoints = ['users', 'dogs', 'notes', 'shelters'];

describe('Routes', () => {

  describe('GET /api/v1/', () =>
    it('should return 200', done =>
      request()
        .get('/api/v1/')
        .expect(200, done)
    )
  );

  describe('GET /api/v1/notfound', () =>
    it('should return 404', done =>
      request()
        .get('/api/v1/notfound')
        .expect(404, done)
    )
  );

  endpoints.forEach(endpoint => {

    describe(`GET /api/v1/${endpoint}`, () =>
      it('should return 200', done =>
        request()
          .get(`/api/v1/${endpoint}`)
          .expect('Content-Type', /json/)
          .expect(200, done)
      )
    );

    describe(`GET /api/v1/${endpoint}/badrequest`, () =>
      it('should return 400', done =>
        request()
          .get(`/api/v1/${endpoint}/badrequest`)
          .expect(400, done)
      )
    );

    describe(`GET /api/v1/${endpoint}/-1`, () =>
      it('should return 404', done =>
        request()
          .get(`/api/v1/${endpoint}/-1`)
          .expect(404, done)
      )
    );

  });
});
