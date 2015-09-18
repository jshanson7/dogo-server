import VError from 'verror';
import { keys, has, difference, result, defaults } from 'lodash';
import validate from '../utils/validate';
import bookshelf from '../db/bookshelf';

export default bookshelf.Model.extend({
  hasTimestamps: ['created_at', 'updated_at'],

  defaults: {
    created_at: null,
    updated_at: null,
  },

  initialize() {
    this.on('saving', this.validateSave);
  },

  validateSave() {
    return validate(this.attributes, result(this.constructor, 'schema'));
  }

}, {
  schema: {},
  relations: {
    fetch: [],
    fetchOne: []
  },
  searchable: [],

  fetch(params) {
    return validate(params, result(this, 'fetchParamsSchema'), { cast: true })
      .catch(e => { throw new VError(e, 'invalid fetch params'); })
      .then(() => {
        const config = defaults({}, params, result(this, 'fetchParamsDefaults'));
        const searchTerm = has(config, 'search') ? '%' + config.search + '%' : null;
        return new this()
          .query(queryBuilder => {
            queryBuilder
              .orderBy(config.orderBy, config.direction)
              .offset(config.offset)
              .limit(config.limit);
            if (searchTerm) {
              config.searchBy.forEach(attribute => queryBuilder.orWhere(attribute, 'ilike', searchTerm));
            }
          })
          .fetchAll({ withRelated: config.withRelated });
      });
  },

  fetchOne(params) {
    return validate(params, result(this, 'fetchOneParamsSchema'), { cast: true })
      .catch(e => { throw new VError(e, 'invalid fetchOne params'); })
      .then(() => {
        const config = defaults({}, params, result(this, 'fetchOneParamsDefaults'));
        return new this({ id: config.id })
          .fetch({ withRelated: config.withRelated });
      });
  },

  create(params) {
    return new this()
      .save(params, { method: 'insert' })
      .catch(e => { throw new VError(e, 'invalid create params'); });
  },

  fetchParamsSchema() {
    const attributes = keys(this.prototype.defaults);
    const directions = ['asc', 'desc'];
    const related = this.relations.fetch;
    return {
      properties: {
        orderBy: {
          type: 'string',
          enum: attributes,
          message: 'must be one of [' + attributes.join(', ') + ']'
        },
        direction: {
          type: 'string',
          enum: directions,
          message: 'must be one of [' + directions.join(', ') + ']'
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
          conform: value => difference(value, related).length === 0,
          messages: {
            conform: 'must be a subset of [' + related.join(', ') + ']'
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
          conform: value => difference(value, this.searchable).length === 0,
          messages: {
            dependencies: 'search must also be present',
            conform: 'must be a subset of [' + this.searchable.join(', ') + ']'
          }
        }
      }
    };
  },

  fetchParamsDefaults() {
    return {
      orderBy: 'updated_at',
      direction: 'desc',
      limit: 20,
      offset: 0,
      searchBy: this.searchable,
      withRelated: this.relations.fetch
    };
  },

  fetchOneParamsSchema() {
    const related = this.relations.fetchOne;
    return {
      properties: {
        id: {
          required: true,
          type: 'integer'
        },
        withRelated: {
          type: 'array',
          conform: v => difference(v, related).length === 0,
          messages: {
            conform: 'must be a subset of [' + related.join(', ') + ']'
          }
        }
      }
    };
  },

  fetchOneParamsDefaults() {
    return {
      withRelated: this.relations.fetchOne
    };
  }

});
