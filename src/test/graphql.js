import request from  './util/request';

describe('GraphQL', () => {
  
  describe('GET /graphql/', () =>
    it('should return 400', done =>
      request()
        .get('/graphql/')
        .expect(400, done)
    )
  );
  
  describe('GET /graphql?query=query+getUser($id:String){user(id:$id){first_name}}&variables={"id":"1"}', () =>
    it('should return user Jeff', done =>
      request()
        .get('/graphql?query=query+getUser($id:String){user(id:$id){first_name}}&variables={"id":"1"}')
        .expect(200)
        .end((err, res) => {
          if (err) { return done(err); }
          if (res.body.data.user.first_name !== 'Jeff') { return done(new Error('should return Jeff user')); }
          done();
        })
    )
  );

});