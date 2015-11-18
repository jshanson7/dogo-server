import { merge } from 'lodash';
import { bookshelf } from 'db';
import assertValid from 'utils/assertValid';

export const defaultPrototypeProps = {
  hasTimestamps: ['created_at', 'updated_at'],
  defaults: {
    created_at: null,
    updated_at: null
  },
  initialize() {
    this.on('saving', this.validateSave);
  },
  validateSave() {
    return assertValid(
      this.attributes,
      this.constructor.schema,
      'error validating attributes on save'
    );
  }
};

export const defaultClassProps = {
  Name: '',
  schema: {},
  relations: [],
  async get(id) { return await new this({ id }).fetch(); },
  async getAll() { return await this.fetchAll(); },
  async create(data) { return await new this().save(data, { method: 'insert' }); }
};

export function createModel({ prototypeProps, classProps }) {
  return bookshelf().model(
    classProps.Name,
    merge({}, defaultPrototypeProps, prototypeProps),
    merge({}, defaultClassProps, classProps)
  );
}
