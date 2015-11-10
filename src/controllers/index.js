import VError from 'verror';
import User from 'models/User';
import Dog from 'models/Dog';
import Shelter from 'models/Shelter';
import Note from 'models/Note';

export const UserController = getRestfulMethodsForModel(User);
export const DogController = getRestfulMethodsForModel(Dog);
export const ShelterController = getRestfulMethodsForModel(Shelter);
export const NoteController = getRestfulMethodsForModel(Note);

function getRestfulMethodsForModel(Model) {
  return {
    async list(ctx, next) {
      ctx.body = await Model
        .fetch(paramsForCTX(ctx))
        .catch(e => ctx.throw(new VError(e, 'fetch error'), 400));

      await next();
    },

    async show(ctx, next) {
      const model = await Model
        .fetchOne(paramsForCTX(ctx))
        .catch(e => ctx.throw(new VError(e, 'fetchOne error'), 400));

      if (!model) { ctx.throw('Not found', 404); }

      ctx.body = model;
      await next();
    },

    async create(ctx, next) {
      ctx.body = await Model.create(paramsForCTX(ctx))
        .catch(e => ctx.throw(new VError(e, 'create error'), 400));

      await next();
    },

    async destroy(ctx, next) {
      ctx.body = await Model.destroy(paramsForCTX(ctx))
        .catch(e => ctx.throw(new VError(e, 'destroy error'), 400));

      await next();
    }
  };
}

function paramsForCTX(ctx) {
  return Object.assign({}, ctx.query, ctx.request.body, ctx.params);
}
