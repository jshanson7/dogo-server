import request from  './util/request';
import resetDB from './util/resetDB';
import { isEqual, omit, findWhere, set, sample } from 'lodash';

const generatedAttrs = ['id', 'created_at', 'updated_at', 'notes', 'users', 'dog', 'dogs', 'author'];
const restOptions = [
  {
    model: 'user',
    endpoint: 'users',
    requiredRelations: [],
    valid: require('./data/users_valid.json'),
    invalid: require('./data/users_invalid.json'),
    created: []
  },
  {
    model: 'dog',
    endpoint: 'dogs',
    requiredRelations: [],
    valid: require('./data/dogs_valid.json'),
    invalid: require('./data/dogs_invalid.json'),
    created: []
  },
  {
    model: 'note',
    endpoint: 'notes',
    requiredRelations: ['dog', 'user'],
    valid: require('./data/notes_valid.json'),
    invalid: require('./data/notes_invalid.json'),
    created: []
  }
];

const addRelations = (model, relations) =>
  relations.reduce(
    (modifiedModel, relation) =>
      set(modifiedModel, `${relation}_id`, sample(findWhere(restOptions, { 'model': relation }).created).id),
    model
  );

const responseEqual = (model, response) =>
  isEqual(model, omit(response, generatedAttrs));


describe('e2e', () => {

  before(resetDB);

  restOptions.forEach(restOpt => describe(`${restOpt.endpoint} endpoint`, () => {
    
    it(`should start with zero ${restOpt.endpoint}`, done =>
      request()
        .get(`/api/v1/${restOpt.endpoint}`)
        .expect(200)
        .end((err, res) => {
          if (err) { return done(err); }
          if (res.body.length !== 0) { return done(new Error('should be zero')); }
          done();
        })
      );

    restOpt.invalid.forEach((model, index) =>
      it(`should fail to create invalid model ${index}`, done =>
        request()
          .post(`/api/v1/${restOpt.endpoint}`)
          .send(restOpt.requiredRelations ? addRelations(model, restOpt.requiredRelations) : model)
          .expect(400, done)
      ));

    restOpt.valid.forEach((model, index) =>
      it(`should create valid model ${index}`, done =>
        request()
          .post(`/api/v1/${restOpt.endpoint}`)
          .send(restOpt.requiredRelations ? addRelations(model, restOpt.requiredRelations) : model)
          .expect(200)
          .end((err, res) => {
            if (err) { return done(err); }
            if (!responseEqual(model, res.body)) { return done(new Error(`created model ${index} doesn't match input`)); }
            restOpt.created[index] = res.body;
            done();
          })
      ));

    restOpt.valid.forEach((model, index) =>
      it(`should fetch created model ${index}`, done =>
        request()
          .get(`/api/v1/${restOpt.endpoint}/${restOpt.created[index].id}`)
          .expect(200)
          .end((err, res) => {
            if (err) { return done(err); }
            if (!responseEqual(model, res.body)) { return done(new Error(`fetched model ${index} doesn't match created`)); }
            done();
          })
      ));

  }));
});