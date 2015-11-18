import { expect } from 'chai';
import { sample } from 'lodash';
import resetDB from '../../utils/resetDB';
import { generate } from 'db/seeds/utils/fakeData';
import { User, Shelter, Dog, Note } from 'models';
import { getOne, getAll } from 'data';

describe('data', () => {
  let generated;

  before(async () => {
    await resetDB();
    generated = await generate(5, 2);
  });

  describe('getAll()', () => {
    [User, Shelter, Dog, Note].forEach(Model => {
      it(`getAll(${Model.Name})`, async () => {
        const models = generated[Model.prototype.tableName];
        expect(models).to.deep.equal(await getAll(Model));
      });
    });
  });

  describe('getOne()', () => {
    [User, Shelter, Dog, Note].forEach(Model => {
      it(`getOne(${Model.Name})`, async () => {
        const model = sample(generated[Model.prototype.tableName]);
        expect(model).to.deep.equal(await getOne(Model, model.id));
      });
    });
  });
});
