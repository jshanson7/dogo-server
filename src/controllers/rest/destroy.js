import VError from 'verror';
import validate from 'utils/validate';
import paramsForCTX from 'utils/paramsForCTX';
import {
  showParamsSchemaForModel,
  showParamsDefaultsForModel
} from './show';

export function destroyForModel(Model) {
  const paramsSchema = destroyParamsSchemaForModel(Model);
  const paramsDefaults = destroyParamsDefaultsForModel(Model);

  return async function destroy(ctx, next) {
    const params = paramsForCTX(ctx);
    const paramsValidation = validate(params, paramsSchema, 'invalid destroy params');

    if (!paramsValidation.valid) {
      ctx.throw(new VError(paramsValidation, 'destroy error'), 400);
    }

    const config = Object.assign({}, paramsDefaults, params);
    const model = await new Model({ id: config.id })
      .fetch({ withRelated: config.withRelated })
      .catch(e => ctx.throw(new VError(e, 'destroy error'), 400));

    if (!model) { ctx.throw('Not found', 404); }

    const response = model.toJSON();

    await model.destroy()
      .catch(e => ctx.throw(new VError(e, 'destroy error'), 400));

    ctx.body = response;

    await next();
  };
}

export function destroyParamsSchemaForModel(Model) {
  return showParamsSchemaForModel(Model);
}

export function destroyParamsDefaultsForModel(Model) {
  return showParamsDefaultsForModel(Model);
}
