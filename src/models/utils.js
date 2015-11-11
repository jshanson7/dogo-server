import { result, merge } from 'lodash';
import { bookshelf } from 'db';
import assertValid from 'utils/assertValid';

export function createModel(Name, prototypeProperties, classProperties) {
  const defaultPrototypeProperties = {
    hasTimestamps: [
      'created_at',
      'updated_at'
    ],
    defaults: {
      created_at: null,
      updated_at: null
    },
    initialize() {
      this.on('saving', this.validateSave);
    },
    validateSave() {
      assertValid(
        this.attributes,
        result(this.constructor, 'schema'),
        'error validating attributes on save'
      );
      return true;
    }
  };

  const defaultClassProperties = { schema: {} };

  return bookshelf().model(
    Name,
    merge(defaultPrototypeProperties, prototypeProperties),
    merge(defaultClassProperties, classProperties)
  );
}
