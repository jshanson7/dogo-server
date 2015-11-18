import { expect } from 'chai';
import { sample, forEach, omit } from 'lodash';
import resetDB from '../../utils/resetDB';
import * as models from 'models';
import {
  generate,
  fakeUser,
  fakeShelter,
  fakeDog,
  fakeNote
} from 'db/seeds/utils/fakeData';

const { User, Shelter, Dog, Note } = models;

describe('models', () => {
  let generated;

  before(async () => {
    await resetDB();
    generated = await generate(5, 2);
  });

  forEach(models, Model => {
    describe(`${Model.Name}`, () => {
      it(`${Model.Name}.get()`, async () => {
        const data = sample(generated[Model.prototype.tableName]);
        expect(data).to.deep.equal((await Model.get(data.id)).toJSON());
      });

      it(`${Model.Name}.getAll()`, async () => {
        const data = generated[Model.prototype.tableName];
        expect(data).to.deep.equal((await Model.getAll()).toJSON());
      });

      it(`${Model.Name}.create()`, async () => {
        let params;
        switch (Model) {
          case User: params = fakeUser(); break;
          case Shelter: params = fakeShelter(); break;
          case Dog: params = fakeDog(sample(generated.shelters).id); break;
          case Note: params = fakeNote(sample(generated.dogs).id, sample(generated.users).id); break;
        }
        const toOmit = ['created_at', 'updated_at', 'id'];
        const ommittedParams = omit(params, toOmit);
        const result = (await Model.create(ommittedParams)).toJSON();
        const ommittedResult = omit(result, toOmit);
        expect(ommittedParams).to.deep.equal(ommittedResult);
      });
    });
  });
});
