import VError from 'verror';
import validate from 'utils/validate';
import paramsForCTX from 'utils/paramsForCTX';

export function destroyForModel(Model) {
  const paramsSchema = { properties: { id: { required: true, type: 'integer' } } };
  const paramsDefaults = { withRelated: [] };

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
