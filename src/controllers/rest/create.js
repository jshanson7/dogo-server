import VError from 'verror';
import paramsForCTX from 'utils/paramsForCTX';

export function createForModel(Model) {
  return async function create(ctx, next) {
    const params = paramsForCTX(ctx);

    ctx.body = await new Model()
      .save(params, { method: 'insert' })
      .catch(e => ctx.throw(new VError(e, 'create error'), 400));

    await next();
  };
}
