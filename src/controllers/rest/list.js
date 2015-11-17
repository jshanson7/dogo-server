import VError from 'verror';
import { has, difference } from 'lodash';
import validate from 'utils/validate';
import paramsForCTX from 'utils/paramsForCTX';

export function listForModel(Model, defaultParams) {
  const paramsSchema = listParamsSchema(Model);
  const defaults = Object.assign({
    orderBy: 'updated_at',
    direction: 'desc',
    limit: 20,
    offset: 0,
    searchBy: [],
    withRelated: []
  }, defaultParams);

  return async function list(ctx, next) {
    const params = paramsForCTX(ctx);
    const paramsValidation = validate(params, paramsSchema, 'invalid list params');

    if (!paramsValidation.valid) {
      ctx.throw(new VError(paramsValidation, 'list error'), 400);
    }

    const config = Object.assign({}, defaults, params);
    const searchTerm = has(config, 'search') ? '%' + config.search + '%' : null;

    ctx.body = await new Model()
      .query(queryBuilder => {
        queryBuilder
          .orderBy(config.orderBy, config.direction)
          .offset(config.offset)
          .limit(config.limit);

        if (searchTerm) {
          config.searchBy.forEach(attribute =>
            queryBuilder.orWhere(attribute, 'ilike', searchTerm)
          );
        }
      })
      .fetchAll({ withRelated: config.withRelated })
      .catch(e => ctx.throw(new VError(e, 'list error'), 400));

    await next();
  };
}

function listParamsSchema(Model) {
  const attributes = Object.keys(Model.schema.properties);
  const relations = Model.relations;
  const searchableAttributes = attributes.filter(attr => Model.schema.properties[attr].type === 'string');
  const directions = ['asc', 'desc'];

  return {
    properties: {
      orderBy: {
        type: 'string',
        enum: attributes,
        message: `must be one of [${attributes.join(', ')}]`
      },
      direction: {
        type: 'string',
        enum: directions,
        message: `must be one of [${directions.join(', ')}]`
      },
      limit: {
        type: 'integer',
        minimum: 0,
        maximum: 100
      },
      offset: {
        type: 'integer',
        minimum: 0
      },
      withRelated: {
        type: 'array',
        conform: value => difference(value, relations).length === 0,
        messages: {
          conform: `must be a subset of [${relations.join(', ')}]`
        }
      },
      search: {
        type: 'string',
        minLength: 0,
        maxLength: 70
      },
      searchBy: {
        type: 'array',
        dependencies: 'search',
        conform: value => difference(value, searchableAttributes).length === 0,
        messages: {
          dependencies: 'search must also be present',
          conform: `must be a subset of [${searchableAttributes.join(', ')}]`
        }
      }
    }
  };
}
