import VError from 'verror';
import { difference } from 'lodash';
import validate from 'utils/validate';
import paramsForCTX from 'utils/paramsForCTX';

export function showForModel(Model, defaultParams) {
  const paramsSchema = showParamsSchemaForModel(Model);
  const defaults = Object.assign({ withRelated: [] }, defaultParams);

  return async function show(ctx, next) {
    const params = paramsForCTX(ctx);
    const paramsValidation = validate(params, paramsSchema, 'invalid show params');

    if (!paramsValidation.valid) {
      ctx.throw(new VError(paramsValidation, 'show error'), 400);
    }

    const config = Object.assign({}, defaults, params);
    const model = await new Model({ id: config.id })
      .fetch({ withRelated: config.withRelated })
      .catch(e => ctx.throw(new VError(e, 'show error'), 400));

    if (!model) { ctx.throw('Not found', 404); }

    ctx.body = model;

    await next();
  };
}

function showParamsSchemaForModel(Model) {
  const relations = Model.relations;
  return {
    properties: {
      id: {
        required: true,
        type: 'integer'
      },
      withRelated: {
        type: 'array',
        conform: v => difference(v, relations).length === 0,
        messages: {
          conform: `must be a subset of [${relations.join(', ')}]`
        }
      }
    }
  };
}
